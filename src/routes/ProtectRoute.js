import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectRoute() {
  const { userLogged } = useSelector((store) => store.users);

  if (!sessionStorage.getItem("isLogin") || userLogged === undefined) {
    sessionStorage.removeItem("isLogin");
    sessionStorage.removeItem("userLogged");

    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
