# Justfile for managing Next.js apps with Docker Compose

build:
    docker compose build

up:
    docker compose up --build
