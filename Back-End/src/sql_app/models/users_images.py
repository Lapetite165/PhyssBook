from sqlalchemy import Boolean, Column, ForeignKey,  Integer, String
from sqlalchemy.orm import relationship

from ..database import Base


class UsersImages(Base):
    __tablename__ = "users_images"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    filename = Column(String)
    current = Column(Boolean)

    users_id = Column(Integer, ForeignKey('users.id'))

    users = relationship("Users", back_populates="users_images")