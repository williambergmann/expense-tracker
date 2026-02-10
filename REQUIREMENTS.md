# REQUIREMENTS.md — Expense Tracker

## Phase 1: Foundation
- [x] Backend scaffold (FastAPI project structure, database connection, health endpoint)
- [x] Frontend scaffold (Vite + React, routing, placeholder pages)
- [x] `/api/ping` health check endpoint
- [x] Custom `/add-endpoint` skill

## Phase 2: Backend Core
- [ ] Expense model (amount, category, description, transaction_date)
- [ ] Category model/enum
- [ ] CRUD endpoints: POST /api/v1/expenses
- [ ] CRUD endpoints: GET /api/v1/expenses (list with filters)
- [ ] CRUD endpoints: GET /api/v1/expenses/{id}
- [ ] CRUD endpoints: PUT /api/v1/expenses/{id}
- [ ] CRUD endpoints: DELETE /api/v1/expenses/{id}
- [ ] Monthly summary endpoint: GET /api/v1/expenses/summary
- [ ] Input validation (Pydantic schemas)

## Phase 3: Frontend Core
- [ ] Expense list/table page
- [ ] Add/edit expense form
- [ ] API client module (fetch wrapper)
- [ ] Delete button with confirmation

## Phase 4: Integration
- [ ] Connect frontend to backend API
- [ ] CORS configuration (properly restricted, not wildcard)
- [ ] End-to-end: create → list → delete flow
- [ ] Filter by category

## Phase 5: Parallel Work
- [ ] Feature: Search/filter expenses
- [ ] Feature: Export expenses (CSV)

## Phase 6: Hardening
- [ ] API endpoint tests (pytest)
- [ ] Security review (SQL injection, XSS, CORS)
- [ ] Fix any issues found

## Phase 7: Docker & Ship
- [ ] Backend Dockerfile
- [ ] Frontend Dockerfile
- [ ] docker-compose.yml
- [ ] `docker compose up` works end-to-end
- [ ] Tag v1.0
