from typing import List
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile, status
from sqlalchemy.orm import Session
from src.dependencies import jwt

from src.dependencies.db import get_db
from src.router.file_import import file_import
from src.sql_app.cruid import asso as cruid_asso
from src.sql_app.schemas.asso import Asso as sc_asso, AssoBase
from src.sql_app.schemas.users import Users


router = APIRouter(
    tags=["Asso"],
    prefix="/asso"
)


NOT_ALLOWED = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authorize action",
            headers={"WWW-Authenticate": "Bearer"},
)


@router.get('/list', response_model=List[sc_asso])
async def get_list_asso(db: Session = Depends(get_db)):
    return cruid_asso.get_list_asso(db)


@router.get('/id/{id}', response_model=sc_asso)
async def get_asso(id:int, db: Session = Depends(get_db)):
    return cruid_asso.get_asso_by_id(db, id)
    

@router.put('/modify/{id}', response_model=sc_asso)
async def update_asso(id: int, asso: AssoBase, db = Depends(get_db), current_user: Users = Depends(jwt.get_current_active_user)):
    if current_user.asso_bools is not None:
        if current_user.asso_bools.com and id == current_user.asso_bools.asso.id:
            return cruid_asso.update_asso(db, id, asso)
    raise NOT_ALLOWED

@router.post('/picture/{id}/add')
async def add_picture(id: int, type:str,file: UploadFile = File(...), db:Session = Depends(get_db), current_user = Depends(jwt.get_current_active_user)):
    asso = cruid_asso.get_asso_by_id(id)
    if current_user.asso_bools is not None:
        if current_user.asso_bools.com and id == current_user.asso_bools.asso.id:
            try:
                name = file_import(file, "assets\\posts_img\\")
                if type == "background":
                    return cruid_asso.add_background(db, id, name)
                else:
                    return cruid_asso.add_picture(db, id, name)
            except:
                raise HTTPException(
                    status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    detail="Import Error",
                    headers={"WWW-Authenticate": "Bearer"},
                )
    raise NOT_ALLOWED


@router.post('/picture/{id}/select/{pic_id}')
async def select_picture(id: int, pic_id: int,type: str, db:Session = Depends(get_db), current_user = Depends(jwt.get_current_active_user)):
    return None