#!/bin/bash

# Vercel Build Script
# This script builds the entire monorepo for Vercel deployment

set -e

echo "🚀 Starting Vercel build..."

# Install dependencies (if needed)
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  pnpm install --frozen-lockfile
fi

# Build backend
echo "🔨 Building backend..."
cd packages/backend
pnpm build
cd ../..

# Build shared
echo "🔨 Building shared..."
cd packages/shared
pnpm build
cd ../..

# Build frontend
echo "🔨 Building frontend..."
cd packages/frontend
pnpm build
cd ../..

# Copy api entry point
echo "📝 Preparing API functions..."
cp api/index.ts api/index.js 2>/dev/null || true

echo "✅ Build completed successfully!"
