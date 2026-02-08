# Vercel Deployment Guide

This guide explains how to deploy Orderly Vibe Creator to Vercel.

## 📋 Prerequisites

1. Vercel account ([sign up](https://vercel.com/signup))
2. GitHub account connected to Vercel
3. Environment variables configured (see below)

## 🚀 Quick Deploy

### Option 1: Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import the GitHub repository: `clawdbothe/Orderly-vibe-creator`
4. Configure Project Settings:
   - **Framework Preset**: Other
   - **Root Directory**: `.`
   - **Build Command**: `pnpm run build:vercel`
   - **Output Directory**: `packages/frontend/dist`
   - **Install Command**: `pnpm install`

5. Add Environment Variables:
   ```env
   LLM_PROVIDER=openai
   OPENAI_API_KEY=sk-xxx
   ```

6. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 🔧 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|----------|
| `LLM_PROVIDER` | LLM provider to use | `openai` \| `glm` \| `minimax` |
| `OPENAI_API_KEY` | OpenAI API key | `sk-...` |

### Optional Variables

| Variable | Description | Example |
|----------|-------------|----------|
| `GLM_API_KEY` | GLM API key | `xxx` |
| `MINIMAX_API_KEY` | MiniMax API key | `xxx` |
| `TURSO_DATABASE_URL` | Turso database URL | `file:local.db` |
| `TURSO_AUTH_TOKEN` | Turso auth token | `xxx` |
| `REDIS_URL` | Redis URL | `redis://localhost:6379` |

## 📦 Build Process

The Vercel build script (`scripts/vercel-build.sh`) does the following:

1. Install dependencies with pnpm
2. Build backend (`packages/backend`)
3. Build shared (`packages/shared`)
4. Build frontend (`packages/frontend`)
5. Prepare API functions

## 🏗️ Architecture

### Frontend
- **Runtime**: Edge Runtime
- **Framework**: React 19 + Vite
- **Output**: Static files in `packages/frontend/dist`

### Backend API
- **Runtime**: Edge Runtime
- **Framework**: Hono 4
- **Deployment**: Vercel Serverless Functions
- **Entry Point**: `api/index.ts`

### File Structure for Vercel

```
.
├── api/
│   └── index.ts           # Serverless Function (Hono app)
├── packages/
│   └── frontend/
│       └── dist/           # Static frontend files
├── vercel.json             # Vercel configuration
└── package.json            # Build scripts
```

## 🌐 API Routes

After deployment, the API will be available at:

```
https://your-project.vercel.app/api/agent/generate
https://your-project.vercel.app/api/dsl/validate
https://your-project.vercel.app/api/registry/components
```

## 🔍 Troubleshooting

### Build Fails

1. Check Node.js version (should be 22+)
2. Check pnpm version (should be 9+)
3. Check build logs in Vercel dashboard

### API 404 Errors

1. Ensure `api/index.ts` is built
2. Check Vercel Functions logs
3. Verify `vercel.json` rewrites configuration

### Environment Variables Not Working

1. Verify variables are set in Vercel dashboard
2. Check variable names match exactly (case-sensitive)
3. Redeploy after adding variables

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Functions](https://vercel.com/docs/functions)
- [Edge Runtime](https://vercel.com/docs/concepts/functions/edge-functions)

---

**Deployed by**: Vercel CI/CD
**Build System**: Turborepo
**Runtime**: Edge Runtime
