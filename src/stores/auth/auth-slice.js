import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as AuthAPI from "../../api/auth-api";

export const loginUser = createAsyncThunk("/login", async (data) => {
  const users = await AuthAPI.login(data);
  return users;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLogin: false,
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
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userLogged = action.payload;
        state.isLogin = true;
        localStorage.setItem("userLogged", JSON.stringify(action.payload));
        localStorage.setItem("isLogin", JSON.stringify(true));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLogin = false;
        state.userLogged = undefined;
      });
  },
});

export const { saveUser, logout } = userSlice.actions;
export default userSlice;
