"use client";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
// import { Provider } from "react-redux";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { ThemeProviderProps } from "next-themes/dist/types";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const theme = createTheme({
    typography: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <Provider store={store}>{children}</Provider> */}
      {children}
    </ThemeProvider>
  );
}
