from sqlalchemy import Boolean, Column, ForeignKey,  Integer, String
from sqlalchemy.orm import relationship

from ..database import Base


class AssoBackgroundImages(Base):
    __tablename__ = "asso_background_image"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    filename = Column(String)
    current = Column(Boolean)

    asso_id = Column(Integer, ForeignKey('posts.id'))

    asso = relationship("Posts", back_populates="asso_background_images")