import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing/Landing';
import ProtectRoute from './routes/ProtectRoute';
import MainStore from './stores/index';
import ErrorPage from './pages/error/ErrorPage';
import LoginPage from './pages/login/LoginPage';
import './index.css';
import Header from './layouts/Header';
import TransactionsPage from './pages/transactions/TransactionsPage';
import MainLayout from './layouts/Main';
function App() {
  return (
    <BrowserRouter>
      {/* <Provider store={MainStore}> */}
      <MainLayout>
        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/login' element={<LoginPage />} />

          <Route element={<ProtectRoute />}>
            <Route path='' element={<LandingPage />} />
            <Route path='/transactions' element={<TransactionsPage />} />
          </Route>
        </Routes>
      </MainLayout>
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
