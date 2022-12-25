import { Navigate, Outlet } from "react-router-dom";

export default function ProtectRoute() {
  if (!localStorage.getItem("token")) {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userLogged");
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
