#!/bin/bash

# Vercel Build Script
# This script builds the entire monorepo for Vercel deployment

set -e

echo "🚀 Starting Vercel build..."

# Install dependencies (if needed)
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  pnpm install
fi

# Build all packages using turbo
echo "🔨 Building all packages..."
pnpm run build

# Copy api entry point
echo "📝 Preparing API functions..."
cp api/index.ts api/index.js 2>/dev/null || true

echo "✅ Build completed successfully!"
