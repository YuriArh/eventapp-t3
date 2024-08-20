import { useTheme } from "next-themes";

export function useThemeMode() {
  const { theme, setTheme } = useTheme();

  const toggleThemeMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return [toggleThemeMode];
}
