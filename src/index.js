import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { theme } from "./Theme";
import { ThemeProvider } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
