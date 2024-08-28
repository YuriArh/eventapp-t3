import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function withTheme({ children }: { children: JSX.Element }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark"]}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
