import AppLayout from "@/components/layout/app-layout/AppLayout";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return <AppLayout />;
}
