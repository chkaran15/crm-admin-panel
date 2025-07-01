import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_panel")({
  beforeLoad: ({ context }) => {
    // If not authenticated, redirect to sign-in
    if (!context.auth.authenticated) {
      throw redirect({
        to: "/sign-in",
      });
    }
  },
  component: PanelLayout,
});

function PanelLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
