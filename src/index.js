import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { MathJaxContext } from "better-react-mathjax";
import { AppContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MathJaxContext>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </MathJaxContext>
  </React.StrictMode>
);
