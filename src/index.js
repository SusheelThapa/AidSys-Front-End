import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

/**
 * Custom CSS files
 */
import "./index.css";

import "./assets/css/login_signup.css";

/**
 * Setting up React Router
 */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
