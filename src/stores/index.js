import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./auth/auth-slice";
import { unitsApi } from "../services/unitsApi";

const MainStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [unitsApi.reducerPath]: unitsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unitsApi.middleware),
});

export default MainStore;
