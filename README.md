# Prize Pursuit AI

> The authoritative list of active and upcoming **AI coding challenges** across the web.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?style=for-the-badge)

![Prize Pursuit AI](src/assets/hero-bg.jpg)

A single-page web app that tracks AI coding competitions, hackathons, and prize challenges — so builders never miss a deadline.

## Features

- **Live challenge directory** — browse active and upcoming AI coding challenges as rich cards
- **Countdown timers** — real-time countdowns to each challenge deadline
- **Metrics & charts** — visual breakdown of prizes, categories, and timelines
- **Submit a challenge** — community submission form to add new events
- **Responsive UI** — built on shadcn/ui primitives with a custom theme

## Tech stack

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Bun

## Run locally

```bash
git clone https://github.com/aaaronmiller/prize-pursuit-ai.git
cd prize-pursuit-ai
bun install      # or: npm install
bun run dev      # or: npm run dev
```

Open the printed localhost URL to view the app.

## Project structure

```
src/
├── components/        # ChallengeCard, ChallengeList, CountdownTimer,
│                      # HeroSection, MetricsCharts, SubmitChallengeForm…
├── components/ui/     # shadcn/ui primitives
└── App.tsx
```
