from sqlalchemy.orm import Session

from src.sql_app import models
from src.sql_app.schemas.posts import Posts, PostsCreate
from src.sql_app.schemas.users import Users
from .verification import verification


def get_list_posts(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Posts).offset(skip).limit(limit).all()


@verification
def get_posts_by_id(db: Session, id:int):
    return db.query(models.Posts).filter(models.Posts.id == id).first()


@verification
def create_posts(db: Session, posts:PostsCreate, current_user:Users):
    db_posts = models.Posts(**posts.dict(), users_id = current_user.id)
    db.add(db_posts)
    db.commit()
    db.refresh(db_posts)
    return db_posts


@verification
def update_posts(db: Session, id: int, posts:Posts):
    update = db.query(models.Posts).filter(models.Posts.id == id)\
        .update(posts.__dict__())
    db.commit()
    return update

@verification
def delete_posts(db: Session, id: int):
    try:
        db.query(models.Posts).filter(models.Posts.id == id).delete()
        db.commit()
        return True
    except:
        return None


def add_picture(db:Session, id: int, name:str):
    db_picture = models.PostsImages(posts_id= id, name=name, filename=name)
    db.add(db_picture)
    db.commit()
    db.refresh(db_picture)
    return db_picture


def add_background(db:Session, id: int, name:str):
    db_picture = models.BackgroundImages(posts_id= id, name=name, filename=name)
    db.add(db_picture)
    db.commit()
    db.refresh(db_picture)
    return db_picture