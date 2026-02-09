/**
 * DSL Routes - DSL validation and conversion endpoints
 */

import { Hono } from "hono";
import { validateDSL } from "@orderly/shared";

const app = new Hono();

/**
 * POST /api/dsl/validate - Validate DSL schema
 */
app.post("/validate", async (c) => {
  const { dsl } = await c.req.json();

  const result = validateDSL(dsl);

  if (!result.success) {
    return c.json(
      {
        success: false,
        error: result.error?.issues,
      },
      400
    );
  }

  return c.json({
    success: true,
    data: result.data,
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
