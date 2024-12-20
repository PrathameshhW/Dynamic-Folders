import { ModalsProvider } from "@mantine/modals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { envConfig } from "./Config/env.config";
import { Router } from "./Config/Router";

const MainLayout = lazy(
  () => import(`./peoples/${envConfig.orgName}/main/MainLayout.tsx`)
);

const queryClient = new QueryClient();
const isAuthRoute =
  location.pathname === "/login" || location.pathname === "/register";

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <QueryClientProvider client={queryClient}>
          <ModalsProvider>
            {isAuthRoute ? (
              <RouterProvider router={Router} />
            ) : (
              <MainLayout>
                <RouterProvider router={Router} />
              </MainLayout>
            )}
          </ModalsProvider>

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Suspense>
    </>
  );
}

export default App;
