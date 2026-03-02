# Pokedex Docker

A minimal full-stack application built to practice Docker and Docker Compose.

This project focuses on container-based development using:

- Vue 3 (frontend)
- Express (backend)
- Docker / Docker Compose
- Healthcheck
- Named Volumes
- Dev container setup

The application fetches Pokémon data from the public PokeAPI and displays it in the browser.

---

## 🎯 Purpose

This repository is created for learning Docker in a practical way:

- Multi-service setup with Docker Compose
- Service networking (`frontend` ↔ `backend`)
- Healthcheck configuration
- Volume management (node_modules isolation)
- Environment variable handling
- Dev container workflow

Docker is the main focus.  
The app itself is intentionally simple.

---

## 🏗 Architecture
```bash
Browser
↓
Frontend (Vue + Vite) ---proxy---> Backend (Express)
↓
PokeAPI
```

---

## 📁 Project Structure
```
pokedex-docker/
backend/
frontend/
docker-compose.yml
.gitignore
README.md
```

---

## 🚀 Getting Started

### 1️⃣ Build and start containers

```bash
docker compose up --build
```

### 2️⃣ Access
Frontend:
```bash
http://localhost:5173
```

Backend health endpoint:
```bash
http://localhost:3000/health
```

## 🧠 Docker Features Used

- Multi-container setup
- Service name-based networking
- Healthcheck
- Named volumes for node_modules
- Port mapping
- Environment variable injection
- Hot reload via bind mount

---

## 🔍 Healthcheck

Backend and frontend containers include Docker healthchecks.

Docker determines container health based on command exit codes.

Example:
```bash
curl -f http://localhost:3000/health || exit 1
```

---

## 📦 Why node_modules is not committed
`node_modules` is excluded via `.gitignore`.

Dependencies are installed inside containers and managed by Docker volumes.

---

## 📚 Learning Notes
This project intentionally prioritizes Docker learning over application complexity.

Future improvements:

- Production build (multi-stage Dockerfile)
- Nginx for frontend production serving
- SQLite persistence
- Separate dev / prod compose profiles

## 🧪 Stop Containers
```bash
docker compose down
```

## License
MIT