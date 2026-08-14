import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
    defaultNotFoundComponent: () => (
      <div className="container-page py-20 text-center">
        <h1 className="font-display text-3xl">Page not found</h1>
        <p className="mt-3 text-[var(--color-fg-muted)]">
          That page does not exist. Try the home page.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex h-11 items-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-5 text-sm font-medium text-[var(--color-primary-fg)]"
        >
          Back home
        </a>
      </div>
    ),
  });
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
