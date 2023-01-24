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

/**
 * Setting up React Router
 */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Assets from "./components/Assets";
import Asset from "./components/Asset";
import Projects from "./components/Projects";

/**
 * Globally importing font awesome
 */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

/**
 * Routing
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/assets",
    element: <Assets />,
  },
  {
    path: "/assets/:id",
    element: <Asset />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
