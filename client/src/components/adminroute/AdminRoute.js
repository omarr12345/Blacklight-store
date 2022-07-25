import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import "./edit.css";

function AdminRoute() {
  const auth = sessionStorage.getItem("Admin");
  return auth === "true" ? <Outlet /> : <Navigate to="/AdminLogin" />;
}

export default AdminRoute;
