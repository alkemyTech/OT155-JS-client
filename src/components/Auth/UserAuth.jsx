import React from 'react'
import useRole from '../../hooks/useRole';
import { Outlet, Navigate } from "react-router-dom";

const UserAuth = () => {
    const isAdmin = useRole();
    const isUser = useRole();
  return isAdmin || isUser ? <Outlet/> : <Navigate to="/login"/>
}

export default UserAuth
