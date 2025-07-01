import DashboardPage from "@/app/(panel)/dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_panel/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DashboardPage />;
}
