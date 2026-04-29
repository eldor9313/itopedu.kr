import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./app/MaterialTheme";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import "./css/index.css";
import i18n from "./i18";
import { ThemeProvider as CustomThemeProvider } from "../src/app/ThemeContext";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <CustomThemeProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router basename={process.env.PUBLIC_URL}>
            <App />
          </Router>
        </ThemeProvider>
      </CustomThemeProvider>
    </I18nextProvider>
  </React.StrictMode>,
);

reportWebVitals();
