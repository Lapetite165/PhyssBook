from typing import List, Optional
from pydantic import BaseModel

from src.sql_app.models.asso import Asso




class PostsImagesCreate(BaseModel):
    name: str
    filename: str


class PostsImages(PostsImagesCreate):
    id: int
    name: str
    filename: str
    posts_id: int


class Keyword(BaseModel):
    name: str


class BackgroundImagesCreate(BaseModel):
    name: str
    filename: str


class BackgroundImages(BackgroundImagesCreate):
    id: int
    name: str
    filename: str
    posts_id: int
    current: bool


class PostsBase(BaseModel):
    title: str
    overview : str
    starting_date: str
    ending_date: str
    creating_date: str    
    asso_id: int


class Restrictions(BaseModel):
    id: int
    name: str
    filename: str


class PostsCreate(PostsBase):
    restrictions_id:int
    background_images: Optional[List[BackgroundImagesCreate]]
    posts_images: Optional[List[PostsImagesCreate]]


class Posts(PostsBase):
    id:int
    users_id: int
    restrictions: Restrictions

    keyword: Optional[List[Keyword]]
    background_images: Optional[List[BackgroundImages]]
    posts_images: Optional[List[PostsImages]]

    class Config:
        orm_mode=True