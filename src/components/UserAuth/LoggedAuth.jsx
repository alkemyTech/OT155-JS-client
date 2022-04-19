import React, { useEffect, useState } from 'react'
import { apiConnectionWithToken } from "../../helpers/apiConnection"
import { Outlet, Navigate } from 'react-router-dom'

const LoggedAuth = () => {
    const [roleId, setRoleId] = useState(0)
    useEffect(() => {
      const { data } = apiConnectionWithToken("/auth/me");
      setRoleId(data.roleId)
    }, [])
    
  return roleId === 2  ? <Outlet /> : <Navigate to="/"/>;
}

export default LoggedAuth