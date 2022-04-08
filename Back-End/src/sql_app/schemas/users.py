from typing import List, Optional
from pydantic import BaseModel
from src.sql_app.schemas.posts import Posts

from src.sql_app.schemas.asso_bools import AssoBools



class UsersBase(BaseModel):
    name: str
    bucque: str
    fam_ss: str
    email: str


class UsersCreate(UsersBase):
    password: str


class Users(UsersBase):
    id: int
    users_status: int

    asso_bools: Optional[List[AssoBools]]
    posts: Optional[List[Posts]]

    class Config:
        orm_mode = True

