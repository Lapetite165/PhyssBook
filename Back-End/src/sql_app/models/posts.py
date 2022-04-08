from ast import keyword
from sqlalchemy import Boolean, Column, ForeignKey,  Integer, String
from sqlalchemy.orm import relationship

from ..database import Base


class Posts(Base):
    __tablename__ = "posts"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    overview = Column(String)
    starting_date = Column(String)
    ending_date = Column(String)
    creation_date = Column(String)

    restriction_id = Column(Integer, ForeignKey('restriction.id'))
    users_id = Column(Integer, ForeignKey('users.id'))

    posts_images = relationship("PostsImages", back_populates="posts")
    background_images = relationship("BackgroundImages", back_populates="posts")
    restriction = relationship("Restriction", back_populates="posts")
    users = relationship("Users", back_populates="posts")
    keyword = relationship("Keyword", back_populates="posts")