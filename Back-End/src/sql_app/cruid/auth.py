from hashlib import sha512
from sqlalchemy.orm import Session

from src.sql_app.schemas.users import Users, UsersCreate
from src.sql_app import models


def get_user(db: Session, user_id: int):
    return db.query(models.Users).filter(models.Users.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.Users).filter(models.Users.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Users).offset(skip).limit(limit).all()


def create_user(db: Session, user: UsersCreate):
    hashed_password = sha512(user.password.encode('utf-8')).hexdigest()
    user.password = str(hashed_password)
    db_user = models.Users(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def add_picture(db:Session, current_user: Users, name:str):
    db_picture = models.UsersImages(users_id= current_user.id, name=name, filename=name)
    db.add(db_picture)
    db.commit()
    db.refresh(db_picture)
    return db_picture


def select_picture(db: Session, id:int):
    db.query(models.UsersImages).filter(models.UsersImages.current == True).update(current = False)
    db.query(models.UsersImages).filter(models.UsersImages.id == id).update(current = True)
    db.commit()
    return True

