import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./router";
import './App.css'

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(router)} />
  </React.StrictMode>
);
