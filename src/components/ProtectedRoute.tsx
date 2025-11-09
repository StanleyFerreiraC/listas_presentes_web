import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  // Se estiver autenticado, renderiza o conteúdo da rota (Outlet). Senão, redireciona para /login.
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
