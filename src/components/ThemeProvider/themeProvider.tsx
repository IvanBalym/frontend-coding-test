import type React from "react";
import { useState } from "react";
import {
  ThemeProvider as StyledThemeProvider
} from "styled-components";
import type { ITheme, IThemesKeys, ThemeProviderProps } from "./../../interfaces";
import { presetTheme, themes } from "../../constants";
import { ThemeContext } from "./themeContext";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ITheme>(presetTheme);

  const handleThemeChange = (name: IThemesKeys) => {
    setTheme(themes[name]);
  };

  const value = {
    theme,
    setTheme: handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
