from sqlalchemy import Boolean, Column, ForeignKey,  Integer, String
from sqlalchemy.orm import relationship

from ..database import Base


class AssoColor(Base):
    __tablename__="asso_color"
    id = Column(Integer, primary_key=True, index=True)
    value = Column(String)

    asso_id = Column(Integer, ForeignKey('asso.id'))

    asso = relationship("Asso", back_populates="asso_color")