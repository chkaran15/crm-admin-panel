import SignInPage from "@/app/(auth)/sign-in";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/sign-in")({
  component: () => <SignInPage />,
});
