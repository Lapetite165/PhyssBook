
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

USER = "AssoAdmin"
PASSWORD = "AssolideBo220"
POSTGRES_DB = "AssoBdd"
PSQL_SERVER = "localhost:5432"
SQLALCHEMY_DATABASE_URL = f"postgresql://{USER}:{PASSWORD}@{PSQL_SERVER}/{POSTGRES_DB}"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

