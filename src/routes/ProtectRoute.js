import { Navigate, Outlet } from "react-router-dom";

export default function ProtectRoute() {
  console.log("session", sessionStorage.getItem("isLogin"));
  if (sessionStorage.getItem("isLogin") === "0") {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
