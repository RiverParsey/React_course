import React from "react";
import ReactDom from 'react-dom';

import { createRoot } from "react-dom/client";
import App from "./components/app/app";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
