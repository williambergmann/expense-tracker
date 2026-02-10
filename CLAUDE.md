# CLAUDE.md — Expense Tracker

## Project Overview
Full-stack expense tracker: Python/FastAPI backend + React/Vite frontend.
Users can log expenses, categorize them, and view monthly summaries.

## Tech Stack
- **Backend:** Python 3.11+ / FastAPI / SQLite (dev) → Postgres (Docker)
- **Frontend:** React 18 / Vite / JavaScript
- **Database:** SQLite for development, Postgres in Docker
- **Containerization:** Docker Compose (added in Phase 7)

## Project Structure
```
expense-tracker/
├── backend/          # FastAPI application
│   ├── app/
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── database.py
│   │   └── routers/
│   └── requirements.txt
├── frontend/         # React + Vite application
│   ├── src/
│   │   ├── App.jsx
│   │   ├── pages/
│   │   ├── components/
│   │   └── api/
│   └── package.json
├── CLAUDE.md         # This file
├── CHANGELOG.md
├── REQUIREMENTS.md
└── BUGS.md
```

## Conventions
- Backend: snake_case for Python, PascalCase for Pydantic models
- Frontend: camelCase for JS, PascalCase for React components
- API prefix: `/api/v1/`
- All dates use ISO 8601 format
- Use `transaction_date` for when an expense occurred (not `created_at`)

## Commands
- Backend: `cd backend && pip install -r requirements.txt && uvicorn app.main:app --reload`
- Frontend: `cd frontend && npm install && npm run dev`
- API docs: http://localhost:8000/docs (auto-generated Swagger)

## Current Phase
Phase 0 — Setup complete. Ready for Phase 1 (Foundation).
