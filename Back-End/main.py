import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.sql_app.database import  engine, Base
from src.sql_app.models import *

from src.router import  asso, posts, auth


Base.metadata.create_all(bind=engine)

#authorize request origins



app = FastAPI(title="AssoAPI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(asso.router)
app.include_router(posts.router)





@app.get("/")
def get_status():
    return {"status": "on"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)