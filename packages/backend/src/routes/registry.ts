/**
 * Registry Routes - Component and Action registry endpoints
 */

import { Hono } from "hono";

// TODO: Import from @orderly/registry
const MOCK_ACTION_REGISTRY = {
  navigate: {
    id: "navigate",
    description: "Navigate to a specific page",
    params: { path: "string" },
  },
  toast: {
    id: "toast",
    description: "Show notification toast",
    params: { message: "string", level: "success|error|warning" },
  },
};

const MOCK_COMPONENT_REGISTRY = {
  OrderbookWidget: {
    id: "OrderbookWidget",
    category: "market_data",
    description: "Display bid/ask depth list",
    props: {
      symbol: { type: "string", required: false },
      depth: { type: "number", default: 20 },
    },
    events: ["onPriceClick"],
  },
};

const MOCK_CATEGORY_REGISTRY = {
  market_data: {
    id: "market_data",
    name: "Market Data",
    description: "Display market data components",
    components: ["OrderbookWidget"],
  },
  trading: {
    id: "trading",
    name: "Trading",
    description: "Trading components",
    components: [],
  },
};

const registryRoutes = new Hono();

/**
 * GET /api/registry/actions - Get action registry
 */
registryRoutes.get("/actions", (c) => {
  return c.json(MOCK_ACTION_REGISTRY);
});

/**
 * GET /api/registry/components - Get component registry
 */
registryRoutes.get("/components", (c) => {
  return c.json(MOCK_COMPONENT_REGISTRY);
});

/**
 * GET /api/registry/categories - Get category registry
 */
registryRoutes.get("/categories", (c) => {
  return c.json(MOCK_CATEGORY_REGISTRY);
});

/**
 * GET /api/registry/components/:category - Get components by category
 */
registryRoutes.get("/components/:category", (c) => {
  const category = c.req.param("category");
  const categoryData = MOCK_CATEGORY_REGISTRY[category as keyof typeof MOCK_CATEGORY_REGISTRY];

  if (!categoryData) {
    return c.json({ error: "Category not found" }, 404);
  }

  // Filter components by category
  const components = Object.entries(MOCK_COMPONENT_REGISTRY)
    .filter(([_, comp]) => comp.category === category)
    .reduce((acc, [id, comp]) => ({ ...acc, [id]: comp }), {});

  return c.json(components);
});

export default registryRoutes;
