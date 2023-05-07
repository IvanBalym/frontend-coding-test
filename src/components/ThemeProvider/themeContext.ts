import { createContext } from "react";
import type { ThemeContextType } from "../../interfaces";
import { presetTheme } from "../../constants";

export const ThemeContext = createContext<ThemeContextType>({
  theme: presetTheme,
  setTheme: (newTheme) => newTheme,
});
