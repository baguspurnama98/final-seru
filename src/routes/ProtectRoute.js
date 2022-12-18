// import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectRoute() {
  // const { userLogged } = useSelector((store) => store.users);
  // || userLogged === undefined
  if (!localStorage.getItem("isLogin")) {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userLogged");

    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
