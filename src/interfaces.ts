export interface IBurger {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface IStyledBurger {
  open: boolean;
}

export interface IMenu {
  open: boolean;
}

export interface ITimerContext {
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
}

export interface IThemes {
  light: ITheme,
  dark: ITheme,
  default: ITheme,
}

export type IThemesKeys = keyof IThemes;

export interface IThemeNames {
  name: IThemesKeys
}

export interface ITheme {
  primaryOne: string;
  primaryTwo: string;
  primaryHover: string;
  mobile: string;
}

export interface IDefaultStyle {
  primaryOne: string;
  primaryTwo: string;
  primaryHover: string;
  mobile: string;
}

export interface ThemeContextType {
  theme: ITheme;
  setTheme: (name: IThemesKeys) => void;
};

export interface ThemeProviderProps {
  children: React.ReactNode;
};