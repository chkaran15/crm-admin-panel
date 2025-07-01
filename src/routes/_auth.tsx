import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { Logs } from "lucide-react";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context }) => {
    // If already authenticated, redirect to panel
    if (context.auth.authenticated) {
      throw redirect({
        to: "/", // or wherever your main panel route is
      });
    }
  },
  // Use a layout component for authentication pages
  component: () => {
    return <AuthLayout />;
  },
});

function AuthLayout() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1576473318185-48d76fc03314?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxlY3JtfGVufDB8fDB8fHww"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="s text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <Logs className="size-8 text-green-600 rotate-180" />
            </div>
            E-Crm Portal
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
