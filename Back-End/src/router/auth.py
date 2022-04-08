

from datetime import timedelta
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile, status
from datetime import timedelta
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from src.router.file_import import file_import
from src.sql_app.schemas.token import Token
from src.dependencies import jwt

from src.dependencies.db import get_db
from src.sql_app.schemas.users import Users
from src.sql_app.cruid import auth as cruid_auth



router = APIRouter(
    prefix="/auth",
    tags=["Authentification"]
)


@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = jwt.authentificate_user(db, form_data.username, form_data.password)
    if not user:
        raise jwt.connexion_exception
    access_token_expires = timedelta(minutes=jwt.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = jwt.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/me", response_model=Users)
async def get_owner_info(current_user: Users = Depends(jwt.get_current_active_user)):
    return current_user


@router.put("/modify", response_model=Users)
async def update_owner_info(new_users: Users, db: Session = Depends(get_db), current_user: Users = Depends(jwt.get_current_active_user)):
    return None


@router.post('/picture/add')
async def add_picture(file: UploadFile = File(...), db:Session = Depends(get_db), current_user = Depends(jwt.get_current_active_user)):
    try:
        name = file_import(file, "assets\\users_img\\")
        return cruid_auth.add_picture(db, current_user, name)
    except:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Import Error",
            headers={"WWW-Authenticate": "Bearer"},
        )


@router.post('/picture/select/{pic_id}')
async def select_picture(pic_id: int, db:Session = Depends(get_db), current_user = Depends(jwt.get_current_active_user)):
    return cruid_auth.select_picture(db, pic_id)