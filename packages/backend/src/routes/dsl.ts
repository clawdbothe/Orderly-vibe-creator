/**
 * DSL Routes - DSL validation and conversion endpoints
 */

import { Hono } from "hono";

// TODO: Import from @orderly/shared when shared package is ready
// import { validateDSL } from "@orderly/shared";

const app = new Hono();

/**
 * POST /api/dsl/validate - Validate DSL schema
 */
app.post("/validate", async (c) => {
  const { dsl } = await c.req.json();

  // TODO: Implement validation
  // const result = validateDSL(dsl);

  return c.json({
    success: true,
    message: "Validation not implemented yet",
    // data: result.data,
  });
});

/**
 * POST /api/dsl/export - Convert DSL to Next.js code
 */
app.post("/export", async (c) => {
  const { dsl, format } = await c.req.json();

  // TODO: Implement DSL to Next.js conversion
  return c.json({
    success: false,
    error: "Export functionality not implemented yet",
  });
});

export default app;
