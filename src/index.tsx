import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./screen/LandingPage";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
