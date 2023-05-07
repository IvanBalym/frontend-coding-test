import { darkTheme, lightTheme } from "./theme";
import type { IThemes } from './interfaces';

export const presetTheme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? darkTheme
  : lightTheme;

export const themes: IThemes = {
  light: lightTheme,
  dark: darkTheme,
  default: presetTheme,
};
