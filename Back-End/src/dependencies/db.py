from src.sql_app.database import SessionLocal


# Dependency
def get_db():
    """Generation Session DataBase

    Yields:
        SessionLocal: launch db
    """
    db = SessionLocal()
    
    try:
        yield db
    finally:
        db.close()