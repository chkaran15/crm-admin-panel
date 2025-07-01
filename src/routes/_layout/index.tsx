import DashboardPage from "@/app/dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DashboardPage />;
}
