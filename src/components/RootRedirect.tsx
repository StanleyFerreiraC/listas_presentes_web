import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function RootRedirect() {
  const { isAuthenticated } = useAuth();

  // Se estiver autenticado, vai para /dashboard. Senão, para /home
  return <Navigate to={isAuthenticated ? "/dashboard" : "/"} replace />;
}
