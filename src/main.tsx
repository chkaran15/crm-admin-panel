/* eslint-disable @typescript-eslint/no-explicit-any */
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./global/index.css";
// Import the generated route tree
import { routeTree } from "./routeTree.gen.ts";
import { createRouter } from "@tanstack/react-router";

// Create a new router instance

const router = createRouter({
  routeTree,
  context: {
    // auth will initially be undefined
    // We'll be passing down the auth state from within a React component
    auth: undefined as any,
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App router={router as any} />
    </Suspense>
  </StrictMode>,
);
