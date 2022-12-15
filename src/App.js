import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/Landing";
import ProtectRoute from "./routes/ProtectRoute";
import MainStore from "./stores/index";
import ErrorPage from "./pages/error/ErrorPage";
import LoginPage from "./pages/login/LoginPage";
function App() {
  return (
    <BrowserRouter>
      {/* <Provider store={MainStore}> */}
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectRoute />}>
          <Route path="" element={<LandingPage />} />
        </Route>
      </Routes>
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
