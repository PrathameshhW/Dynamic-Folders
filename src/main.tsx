import "@mantine/core/styles.css";
import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { envConfig } from "./Config/env.config.ts";
import "./index.css";

const TheConfigProvider = lazy(
  () => import(`./peoples/${envConfig.orgName}/config/TheConfigProvider.tsx`)
);

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <TheConfigProvider>
      <App />
    </TheConfigProvider>
  </StrictMode>
);
