import { createGlobalStyle } from "styled-components";
import type { IDefaultStyle } from "./interfaces";

const GlobalStyle = createGlobalStyle<{ theme: IDefaultStyle }>`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.primaryOne};
    color: ${({ theme }) => theme.primaryTwo};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  #root {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
