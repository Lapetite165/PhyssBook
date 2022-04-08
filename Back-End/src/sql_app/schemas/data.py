from typing import List
from src.sql_app.schemas.asso_bools import AssoBools
from src.sql_app.schemas.posts import PostsBase
from .users import Users


class Data(Users):
    posts: List[PostsBase]
    asso_bools: List[AssoBools]