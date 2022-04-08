from sqlalchemy import Boolean, Column, ForeignKey,  Integer, String
from sqlalchemy.orm import relationship

from ..database import Base


class AssoPicture(Base):
    __tablename__ = "asso_picture"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    filename = Column(String)
    current = Column(Boolean)

    asso_id = Column(Integer, ForeignKey('asso.id'))

    asso = relationship("Asso", back_populates="asso_picture")