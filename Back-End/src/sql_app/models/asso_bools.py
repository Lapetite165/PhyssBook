from sqlalchemy import Boolean, Column, ForeignKey,  Integer, String
from sqlalchemy.orm import relationship

from ..database import Base


class AssoBools(Base):
    __tablename__ = "asso_bools"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    title = Column(String)
    description = Column(String)
    com = Column(Boolean)

    users_id = Column(Integer, ForeignKey('users.id'))
    asso_id = Column(Integer, ForeignKey('asso.id'))

    users = relationship("Users", back_populates="asso_bools")
    asso = relationship("Asso", back_populates="asso_bools")