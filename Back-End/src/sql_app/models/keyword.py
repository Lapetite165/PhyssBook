from sqlalchemy import Boolean, Column, ForeignKey,  Integer, String
from sqlalchemy.orm import relationship

from ..database import Base


class Keyword(Base):
    __tablename__ = "keyword"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    posts_id = Column(Integer, ForeignKey('posts.id'))

    posts = relationship("Posts", back_populates='keyword')