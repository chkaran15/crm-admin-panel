import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, type createRouter } from "@tanstack/react-router";
import { ThemeProvider } from "./providers/theme-provider";
import { useAuthStore } from "./store/auth-store";

type AppProps = { router: ReturnType<typeof createRouter> };

const queryClient = new QueryClient();

function App({ router }: AppProps) {
  const auth = useAuthStore();

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={router}
          context={{
            auth,
          }}
        />
        {/* React query dev tools */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
