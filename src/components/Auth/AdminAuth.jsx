import React from "react";
import useRole from "../../hooks/useRole";
import { Outlet, Navigate } from "react-router-dom";

const AdminAuth = () => {
  const isAdmin = useRole();

  return isAdmin ? <Outlet/> : <Navigate to="/"/>
};

export default AdminAuth;
