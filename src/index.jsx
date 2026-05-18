import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { LanguageProvider } from "./components/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
