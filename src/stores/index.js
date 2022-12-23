import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./auth/auth-slice";
import residentSlice from "./master/resident-slice";
import unitsSlice from "./master/units-slice";
import transactionSlice from "./transaction/transaction-slice";
import { unitsApi } from "../services/unitsApi";
const MainStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [transactionSlice.name]: transactionSlice.reducer,
    [residentSlice.name]: residentSlice.reducer,
    [unitsSlice.name]: unitsSlice.reducer,
    [unitsApi.reducerPath]: unitsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unitsApi.middleware),
});

export default MainStore;
