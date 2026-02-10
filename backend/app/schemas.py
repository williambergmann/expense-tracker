from datetime import date, datetime

from pydantic import BaseModel, Field


class ExpenseCreate(BaseModel):
    amount: float = Field(..., gt=0, description="Expense amount, must be positive")
    category: str = Field(..., min_length=1, max_length=50)
    description: str = Field(default="", max_length=255)
    transaction_date: date


class ExpenseUpdate(BaseModel):
    amount: float | None = Field(default=None, gt=0)
    category: str | None = Field(default=None, min_length=1, max_length=50)
    description: str | None = Field(default=None, max_length=255)
    transaction_date: date | None = None


class ExpenseResponse(BaseModel):
    id: int
    amount: float
    category: str
    description: str
    transaction_date: date
    created_at: datetime

    model_config = {"from_attributes": True}
