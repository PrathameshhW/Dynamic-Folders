import { createTheme, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

const TheConfigProvider = ({ children }: { children: ReactNode }) => {
  const MY_THEME = createTheme({
    headings: {},
  });

  return <MantineProvider theme={MY_THEME}>{children}</MantineProvider>;
};

export default TheConfigProvider;
