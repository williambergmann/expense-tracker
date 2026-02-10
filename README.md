# Expense Tracker

Full-stack expense tracking application built with FastAPI (Python) and React (Vite).

## Features
- Log expenses with amount, category, description, and date
- Categorize expenses
- View monthly summaries
- Search and filter expenses
- Export to CSV

## Tech Stack
- **Backend:** Python / FastAPI / SQLite
- **Frontend:** React / Vite
- **Deployment:** Docker Compose

## Getting Started

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Docker (Phase 7)
```bash
docker compose up --build
```
