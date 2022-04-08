from typing import List, Optional
from pydantic import BaseModel

from src.sql_app.schemas.posts import Posts


class AssoColor(BaseModel):
    value: str


class AssoPicture(BaseModel):
    name: str
    filename:str
    current: bool

class AssoBackgroundImages(BaseModel):
    name: str
    filename:str
    current: bool

class AssoBase(BaseModel):
    name: str
    peksname: str
    overview: str

    asso_color: Optional[List[AssoColor]]
    asso_picture: Optional[List[AssoPicture]]
    asso_picture: Optional[List[AssoBackgroundImages]]

    class Config:
        orm_mode = True

class Asso(AssoBase):
    id: int

    posts: Optional[List[Posts]]
    
    class Config:
            orm_mode = True