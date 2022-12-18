import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/Landing";
import ProtectRoute from "./routes/ProtectRoute";
import MainStore from "./stores/index";
import ErrorPage from "./pages/error/ErrorPage";
import LoginPage from "./pages/login/LoginPage";
import "./index.css";

import TransactionsPage from "./pages/transactions/TransactionsPage";
import MainLayout from "./layouts/Main";
import UnitPage from "./pages/master/units/UnitPage";
import HomePage from "./pages/home/HomePage";
import DetailPageUnit from "./pages/master/units/DetailPage";
import ResidentPage from "./pages/master/residents/ResidentPage";

function App() {
  return (
    <BrowserRouter>
      <Provider store={MainStore}>
        <MainLayout>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="" element={<LandingPage />} />
            <Route element={<ProtectRoute />}>
              <Route path="transactions" element={<TransactionsPage />} />
              <Route path="units" element={<UnitPage />} />
              <Route path="unit/:id" element={<DetailPageUnit />} />
              <Route path="home" element={<HomePage />} />
              <Route path="resident/:id" element={<ResidentPage />} />
            </Route>
          </Routes>
        </MainLayout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
