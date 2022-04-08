from sqlalchemy import Boolean, Column, ForeignKey,  Integer, String
from sqlalchemy.orm import relationship

from ..database import Base


class Users(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String)
    password = Column(String)
    bucque = Column(String)
    fam_ss = Column(String)
    name = Column(String)
    users_status = Column(Integer)

    asso_bools = relationship("AssoBools", back_populates="users")
    posts = relationship("Posts", back_populates="users")
    users_images = relationship("UsersImages", back_populates="users")