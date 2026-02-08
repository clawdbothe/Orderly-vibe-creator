/**
 * Main App Component - React 19
 */

import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

// Lazy load routes
const IndexRoute = lazy(() => import("./pages/index"));

// Create router
const router = createRouter({
  routes: [
    {
      path: "/",
      component: IndexRoute,
    },
  ],
});

// Render
const root = createRoot(document.getElementById("root")!);
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>
);
