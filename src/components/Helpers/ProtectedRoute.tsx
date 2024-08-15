import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
}

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{element}</>;
};

export default ProtectedRoute;
