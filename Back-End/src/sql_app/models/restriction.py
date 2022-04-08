from sqlalchemy import Boolean, Column, ForeignKey,  Integer, String
from sqlalchemy.orm import relationship

from ..database import Base


class Restriction(Base):
    __tablename__ = "restriction"
    id = Column(Integer, primary_key=True, index= True)
    name = Column(Integer)
    filename = Column(Integer)

    posts = relationship('Posts', back_populates="restriction")