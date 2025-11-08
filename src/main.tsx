import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/SingUp", element: <SingUp /> },
        { path: "/dashboard", element: <Dashboard /> },
      ],
    },
  ],
  { basename: "/listas_presentes_web" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
