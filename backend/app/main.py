from fastapi import FastAPI

from app.database import Base, engine
from app.routers import expenses

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Expense Tracker API", version="0.1.0")

app.include_router(expenses.router)


@app.get("/api/health")
def health_check():
    return {"status": "ok"}
