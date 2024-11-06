import { lazy } from "react";
import { envConfig } from "./Config/env.config";

const MainLayout = lazy(
  () => import(`./peoples/${envConfig.orgName}/main/MainLayout.tsx`)
);

function App() {
  return <MainLayout />;
}

export default App;
