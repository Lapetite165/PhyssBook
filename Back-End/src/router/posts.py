from typing import List
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile, status
from sqlalchemy.orm import Session
from src.dependencies import jwt

from src.dependencies.db import get_db
from src.router import file_import
from src.sql_app.cruid import posts as cruid_posts
from src.sql_app.schemas.posts import Posts as sc_posts, PostsCreate
from src.sql_app.schemas.users import Users


router = APIRouter(
    tags=["Posts"],
    prefix="/posts"
)


NOT_ALLOWED = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authorize action",
            headers={"WWW-Authenticate": "Bearer"},
)


@router.get('/publiclist', response_model=List[sc_posts])
async def get_list_posts(db: Session = Depends(get_db)):
    return cruid_posts.get_list_posts(db)


@router.get('/limitedlist', response_model=List[sc_posts])
async def get_list_posts(db: Session = Depends(get_db),current_user = Depends(jwt.get_current_active_user)):
    return cruid_posts.get_list_posts(db)


@router.get('/id/{id}', response_model=sc_posts)
async def get_posts(id:int, db: Session = Depends(get_db)):
    return cruid_posts.get_posts_by_id(db, id)


@router.post('/create/', response_model=sc_posts)
async def create_posts(posts: PostsCreate, db: Session = Depends(get_db), current_user:Users = Depends(jwt.get_current_active_user)):
    if current_user.asso_bools is not None:
        if current_user.asso_bools.com and posts.asso_id == current_user.asso_bools.asso.id:
            return cruid_posts.create_posts(db, posts, current_user)
    raise NOT_ALLOWED



@router.put('/modif/{id}', response_model=sc_posts)
async def update_posts(id: int,posts: sc_posts, db: Session = Depends(get_db), current_user = Depends(jwt.get_current_active_user)):
    if cruid_posts.get_posts_by_id(id).users_id == current_user.id:
        return cruid_posts.update_posts(db, id, posts)


@router.delete('/delete/{id}', response_model=bool)
async def delete_posts(id: int, db: Session = Depends(get_db), current_user = Depends(jwt.get_current_active_user)):
    if cruid_posts.get_posts_by_id(id).users_id == current_user.id:
        return  cruid_posts.delete_posts(db,id)


@router.post('/picture/{id}/add')
async def add_picture(id: int,type: str,file: UploadFile = File(...), db:Session = Depends(get_db), current_user = Depends(jwt.get_current_active_user)):
    posts = cruid_posts.get_posts_by_id(id)
    if current_user.asso_bools is not None:
        if current_user.asso_bools.com and posts.users_id == current_user.id:
            try:
                name = file_import(file, "assets\\posts_img\\")
                if type == "background":
                    return cruid_posts.add_background(db, id, name)
                else:
                    return cruid_posts.add_picture(db, id, name)
            except:
                raise HTTPException(
                    status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    detail="Import Error",
                    headers={"WWW-Authenticate": "Bearer"},
                )
    raise NOT_ALLOWED
