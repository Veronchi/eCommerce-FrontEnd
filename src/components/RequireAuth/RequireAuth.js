import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useStore } from "../../hook/useStore";
import { LOGIN_ROUTE } from "../../utils/consts";

const RequireAuth = ({ children }) => {
  const { user } = useStore();
  const location = useLocation();

  if (!user.isAuth) {
    return <Navigate to={LOGIN_ROUTE} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
