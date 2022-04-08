from pydantic import BaseModel

from src.sql_app.schemas.asso import Asso


class AssoBools(BaseModel):
    id: int
    name: str
    title: str
    description: str
    com: bool

    asso: Asso

    class Config:
        orm_mode = True