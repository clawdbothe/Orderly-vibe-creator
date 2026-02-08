# Orderly AI Architect

> AI-powered DEX construction platform - Generate complete decentralized exchange applications with natural language

## 🚀 Overview

Orderly AI Architect is a next-generation platform that uses AI to generate complex DEX applications through a declarative DSL (Domain Specific Language) instead of writing code directly.

### Core Philosophy

**From Code Gen → Config Gen**

- **Traditional**: AI writes React code (prone to errors, hard to maintain)
- **Orderly AI**: AI generates structured DSL (safe, verifiable, debuggable)

## 📋 Architecture

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

### Key Technologies

**Frontend**:
- React 19 (latest features: Server Components, useOptimistic, Actions)
- Vite 6 (ultra-fast HMR)
- TanStack Router v2 (type-safe routing)
- Zustand 5 (lightweight state management)
- Tailwind CSS v4 + shadcn/ui
- Vercel AI SDK v4

**Backend**:
- Hono 4 (ultra-lightweight, Edge Runtime)
- Drizzle ORM (3x faster than Prisma)
- Turso (edge SQLite database)
- Vercel AI SDK v4 (unified LLM interface)
- OpenAI (primary) + GLM/MiniMax (switchable)

**Monorepo**:
- Turborepo (incremental caching)
- pnpm workspace (fast installation)

## 🏗️ Monorepo Structure

```
orderly-ai-architect/
├── packages/
│   ├── frontend/          # React 19 Web UI
│   ├── backend/           # Hono API server
│   ├── runtime/           # Behavior Engine (Event Bus, Rule Evaluator)
│   ├── shared/            # Shared types and utilities
│   └── registry/         # Action/Component registries (auto-generated)
├── scripts/              # Automation scripts
├── docs/                 # Documentation
└── apps/                 # Optional standalone apps
```

## 🛠️ Development

### Prerequisites

- Node.js 22+
- pnpm 9+

### Installation

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

### Project Scripts

| Script | Description |
|---------|-------------|
| `pnpm dev` | Start all packages in development mode |
| `pnpm build` | Build all packages |
| `pnpm lint` | Lint all packages |
| `pnpm format` | Format code with Prettier |
| `pnpm clean` | Clean all build artifacts |
| `pnpm generate:registry` | Auto-generate component registry |

## 📚 Documentation

- [Technical Design](./docs/TECH_DESIGN.md) - Complete architecture and DSL design
- [Tech Stack](./docs/TECH_STACK.md) - Technology choices and rationale

## 🤝 Contributing

This project is currently in active development. We welcome contributions!

## 📄 License

MIT

---

**Built with ❤️ by Orderly Team**
