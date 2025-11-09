import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import { CriarLista } from "./pages/CriarLista";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider, useAuth } from "./context/AuthContext";

const RootRedirect = () => {
  const { isAuthenticated } = useAuth();
  return <Navigate to={isAuthenticated ? "/dashboard" : "/home"} replace />;
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootRedirect />,
    },
    {
      element: <Layout />, // Layout com Navbar e Footer
      children: [
        { path: "/home", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/SingUp", element: <SingUp /> },
        // Rotas Protegidas
        {
          element: <ProtectedRoute />,
          children: [
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/criar-lista", element: <CriarLista /> },
          ],
        },
      ],
    },
  ],
  { basename: "/listas_presentes_web" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
