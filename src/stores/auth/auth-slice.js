import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as AuthAPI from "../../api/auth-api";

export const loginUser = createAsyncThunk("/login", async (data) => {
  const users = await AuthAPI.login(data);
  return users;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    userLogged: undefined,
  },
  reducers: {
    saveUser: (state, action) => {
      state.userLogged = action.payload;
      state.isLogin = true;
    },
    logout: (state, action) => {
      state.isLogin = false;
      state.userLogged = undefined;
      localStorage.removeItem("token");
      localStorage.removeItem("userLogged");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        localStorage.setItem("userLogged", JSON.stringify(action.payload));
        state.userLogged = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.userLogged = undefined;
      });
  },
});

export const { saveUser, logout } = userSlice.actions;
export default userSlice;
