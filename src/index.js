import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { MathJaxContext } from "better-react-mathjax";
import { AppContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <MathJaxContext>
        <App />
      </MathJaxContext>
    </AppContextProvider>
  </React.StrictMode>
);
