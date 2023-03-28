import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./main.css";

const chromeExtensionId = "devkit-json-viewer-chrome-extension";

try {
  const body = document.querySelector("body");

  //@ts-ignore
  const json = JSON.parse(document.body.textContent);

  const app = document.createElement("div");
  app.id = chromeExtensionId;

  //@ts-ignore
  if (body) {
    body.prepend(app);
  }

  const container = document.getElementById(chromeExtensionId);
  const root = createRoot(container!);

  root.render(
    <React.StrictMode>
      <App json={json} />
    </React.StrictMode>
  );
} catch (e) {}
