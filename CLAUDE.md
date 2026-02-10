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

## Backend Patterns (established Phase 1)
- Router files in `backend/app/routers/` — one per resource
- Each router uses `APIRouter(prefix="/api/v1/<resource>", tags=["<resource>"])`
- Pydantic schemas: `<Resource>Create`, `<Resource>Update`, `<Resource>Response`
- DB sessions via `Depends(get_db)`
- HTTP status codes: 201 (create), 204 (delete), 404 (not found)

## Frontend Patterns (established Phase 1)
- Pages in `frontend/src/pages/` — one per route
- API client in `frontend/src/api/client.js` — centralized fetch wrapper
- React Router for navigation
- Forms use controlled components with useState

## Current Phase
Phase 1 — Foundation complete. Ready for Phase 2 (Backend Core).
