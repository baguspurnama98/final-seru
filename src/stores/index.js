import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./auth/auth-slice";
import unitsSlice from "../pages/home/Slice";

const MainStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [unitsSlice.name]: unitsSlice.reducer,
  },
});

export default MainStore;
