/**
 * Hono API Server - Main entry point
 */

import { Hono } from "hono";
import { cors } from "@hono/cors";
import { logger } from "hono/logger";

// Routes
import { agentRoutes } from "./routes/agent";
import { dslRoutes } from "./routes/dsl";
import { registryRoutes } from "./routes/registry";

const app = new Hono();

// Middleware
app.use("*", cors());
app.use("*", logger());

// Health check
app.get("/", (c) => {
  return c.json({
    name: "Orderly AI Architect API",
    version: "0.1.0",
    status: "healthy",
  });
});

// Routes
app.route("/api/agent", agentRoutes);
app.route("/api/dsl", dslRoutes);
app.route("/api/registry", registryRoutes);

// Error handling
app.onError((err, c) => {
  console.error("Server error:", err);
  return c.json(
    {
      error: err.message,
      status: 500,
    },
    500
  );
});

export default app;
