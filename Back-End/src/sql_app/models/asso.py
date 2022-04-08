from sqlalchemy import Boolean, Column, ForeignKey,  Integer, String
from sqlalchemy.orm import relationship

from ..database import Base


class Asso(Base):
    __tablename__ = "asso"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    peksname = Column(String)
    overview = Column(String)

    asso_color = relationship("AssoColor", back_populates="asso")
    asso_picture = relationship("AssoPicture", back_populates="asso")
    asso_bools = relationship("AssoBools", back_populates="asso")
    asso_background_images = relationship('AssoBackgroundImages', back_populates="asso")