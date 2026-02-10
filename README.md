# Orderly Vibe Creator

> AI-powered DEX construction platform - Generate complete decentralized exchange applications with natural language

## 🚀 Overview

Orderly Vibe Creator is a next-generation platform that uses AI to generate complex DEX applications through a declarative DSL (Domain Specific Language) instead of writing code directly.

### Core Philosophy

**From Code Gen → Config Gen**

- **Traditional**: AI writes React code (prone to errors, hard to maintain)
- **Orderly AI**: AI generates structured DSL (safe, verifiable, debuggable)

## 🏗️ Architecture

```
User Natural Language
        ↓
Multi-Agent Orchestration (LangGraph)
        ↓
DSL Intermediate State
    ├─ App Manifest (routing)
    ├─ Layout DSL (page structure)
    └─ Behavior DSL (logic orchestration)
        ↓
    ├─ Preview Mode (Sandpack + Vite, 1s launch)
    └─ Export Mode (Next.js 14, production code)
```

## 📦 Monorepo Structure

```
orderly-vibe-creator/
├── packages/
│   ├── shared/          # Shared types and utilities
│   ├── frontend/         # React 19 Web UI
│   ├── backend/          # Hono API server
│   ├── runtime/           # Behavior Engine (Event Bus, Rule Evaluator)
│   └── registry/         # Component and Action registries
├── scripts/             # Automation scripts
├── docs/                # Documentation
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

## 🛠️ Technology Stack

### Frontend
- React 19 (latest features)
- Vite 6
- TanStack Router v2
- Zustand 5
- Tailwind CSS v4
- shadcn/ui
- Vercel AI SDK v4

### Backend
- Hono 4 (Edge Runtime)
- Drizzle ORM
- Vercel AI SDK v4
- OpenAI + GLM/MiniMax (switchable)

### Monorepo
- Turborepo (incremental caching)
- pnpm workspace (fast installation)

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build all packages
pnpm build

# Lint all packages
pnpm lint
```

## 📚 Documentation

- [Technical Design](./docs/TECH_DESIGN.md)
- [Tech Stack](./docs/TECH_STACK.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Automation Guide](./AUTOMATION.md)

## 📄 License

MIT

---

**Built with ❤️ by Orderly Team**
