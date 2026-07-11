import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio/">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
