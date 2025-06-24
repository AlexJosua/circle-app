import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../lib/auth";
import type { ReactNode } from "react"; // <- tambahkan ini

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>; // gunakan fragment untuk membungkus ReactNode
}
