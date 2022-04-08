from sqlalchemy import Boolean, Column, ForeignKey,  Integer, String
from sqlalchemy.orm import relationship

from ..database import Base


class PostsImages(Base):
    __tablename__ = "posts_image"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    filename = Column(String)
    current = Column(Boolean)

    posts_id = Column(Integer, ForeignKey('posts.id'))

    posts = relationship("Posts", back_populates="posts_images")