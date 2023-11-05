import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
