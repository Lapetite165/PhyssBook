from datetime import datetime, timedelta
from typing import Optional

from fastapi import HTTPException, status
from fastapi.param_functions import Depends
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from sqlalchemy.orm import Session
from hashlib import sha512

from src.sql_app.schemas import users as schemas
from src.sql_app.models import users
from src.sql_app.schemas.token import TokenData
from src.dependencies.db import get_db
from src.sql_app.cruid import auth


SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token", )

credentials_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
)

connexion_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Incorrect email or password",
    headers={"WWW-Authenticate": "Bearer"},
)


def authentificate_user(db: Session, email: str, password: str,) -> users.Users | bool:
    
    user = auth.get_user_by_email(db, email)
    if user is not None:
        if user.password == str(sha512(password.encode('utf-8')).hexdigest()):
            return user
        else:
            return False 
    else:
        return False


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def user_depend_email(token_data: TokenData, db: Session):
    return auth.get_user_by_email(db, email=token_data.email)


async def get_current_user(db: Session = Depends(get_db) , token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = TokenData(email=email)
    except JWTError:
        raise credentials_exception
    user = user_depend_email(token_data, db)
    if user is None:
        raise credentials_exception
    return user


async def get_current_active_user(current_user: schemas.Users = Depends(get_current_user)):
    if not current_user:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user