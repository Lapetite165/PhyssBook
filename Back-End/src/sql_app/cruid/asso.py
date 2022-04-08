from sqlalchemy.orm import Session

from src.sql_app import models
from src.sql_app.schemas.asso import AssoBase
from .verification import verification


def get_list_asso(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Asso).offset(skip).limit(limit).all()


@verification
def get_asso_by_id(db: Session, id:int ):
    return db.query(models.Asso).filter(models.Asso.id == id).first()


@verification
def update_asso(db: Session, id: int, asso : AssoBase):
    update = db.query(models.Asso).filter(models.Asso.id == id)\
        .update(asso.__dict__())
    db.commit()
    return update

def add_picture(db:Session, id:int, name:str):
    db_picture = models.AssoPicture(asso_id= id, name=name, filename=name)
    db.add(db_picture)
    db.commit()
    db.refresh(db_picture)
    return db_picture


def select_picture(db: Session, id:int):
    db.query(models.AssoPicture).filter(models.AssoPicture.current == True).update(current = False)
    db.query(models.AssoPicture).filter(models.AssoPicture.id == id).update(current = True)
    db.commit()
    return True


def add_background(db:Session, id:int, name:str):
    db_picture = models.AssoBackgroundImages(asso_id= id, name=name, filename=name)
    db.add(db_picture)
    db.commit()
    db.refresh(db_picture)
    return db_picture


def select_background(db: Session, id:int):
    db.query(models.AssoBackgroundImages).filter(models.AssoBackgroundImages.current == True).update(current = False)
    db.query(models.AssoBackgroundImages).filter(models.AssoBackgroundImages.id == id).update(current = True)
    db.commit()
    return True