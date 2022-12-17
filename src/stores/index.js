import { configureStore } from '@reduxjs/toolkit';
import userSlice from './auth/auth-slice';
import residentSlice from './master/resident-slice';
import transactionSlice from './transaction/transaction-slice';
const MainStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [transactionSlice.name]: transactionSlice.reducer,
    [residentSlice.name]: residentSlice.reducer,
  },
});

export default MainStore;
