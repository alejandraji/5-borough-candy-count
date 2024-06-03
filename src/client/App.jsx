import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Error } from "./components/Error.jsx";
import { Home } from "./Home.jsx";
import { Shell } from "./components/Shell.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
