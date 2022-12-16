import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./auth/auth-slice";
const MainStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
});

export default MainStore;
