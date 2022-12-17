import { configureStore } from '@reduxjs/toolkit';
import userSlice from './auth/auth-slice';
import residentSlice from './master/resident-slice';
import unitsSlice from './master/units-slice';
import transactionSlice from './transaction/transaction-slice';
const MainStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [transactionSlice.name]: transactionSlice.reducer,
    [residentSlice.name]: residentSlice.reducer,
    [unitsSlice.name]: unitsSlice.reducer,
  },
});

export default MainStore;
