import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "../..";
import { LOGIN_ROUTE } from "../../utils/consts";

const RequireAuth = ({ children }) => {
  const { user } = useContext(Context);
  const location = useLocation();

  if (!user.isAuth) {
    return <Navigate to={LOGIN_ROUTE} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
