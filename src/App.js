import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import MainLayout from "./layouts/Main";
import MainStore from "./stores/index";
import ProtectRoute from "./routes/ProtectRoute";
import ErrorPage from "./pages/error/ErrorPage";

import LandingPage from "./pages/landing/Landing";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";

import UnitPage from "./pages/master/units/UnitPage";
import DetailPageUnit from "./pages/master/units/DetailPage";

import TransactionsPage from "./pages/transactions/TransactionsPage";
import DetailTransactionPage from "./pages/transactions/DetailTransactionPage";

import ResidentDetail from "./pages/master/residents/ResidentDetail";
import ResidentsPage from "./pages/master/residents/ResidentsPage";

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
              <Route path="residents" element={<ResidentsPage />} />
              <Route path="resident/:id" element={<ResidentDetail />} />
              <Route
                path="transactions/:id"
                element={<DetailTransactionPage />}
              />
            </Route>
          </Routes>
        </MainLayout>
      </Provider>
    </BrowserRouter>
  );
}
// npm install 
export default App;
