import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { envConfig } from "./Config/env.config.ts";
import "./index.css";

const TheConfigProvider = lazy(
  () => import(`./peoples/${envConfig.orgName}/config/TheConfigProvider.tsx`)
);

const queryClient = new QueryClient();

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <TheConfigProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </TheConfigProvider>
  </StrictMode>
);
