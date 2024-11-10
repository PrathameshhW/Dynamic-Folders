import { createTheme, MantineProvider } from "@mantine/core";
import { createContext, ReactNode, useState } from "react";
import { IMainContext, Theme } from "../../../pages/dashboard/DashboardDto";

export const MainContext = createContext<IMainContext>({
  handleThemeChange: () => {},
  theme: "light",
});

const TheConfigProvider = ({ children }: { children: ReactNode }) => {
  const selectedTheme = localStorage.getItem("theme") as Theme["theme"];

  const [theme, setTheme] = useState<Theme["theme"]>(selectedTheme || "light");

  const handleThemeChange = (val: Theme["theme"]) => {
    setTheme(val === "light" ? "dark" : "light");
    localStorage.setItem("theme", val === "light" ? "dark" : "light");
  };

  const MY_THEME = createTheme({
    fontFamily: "Poppins , sans-serif",
  });
  return (
    <MainContext.Provider value={{ handleThemeChange, theme }}>
      <MantineProvider theme={MY_THEME} forceColorScheme={theme}>
        {children}
      </MantineProvider>
    </MainContext.Provider>
  );
};

export default TheConfigProvider;
