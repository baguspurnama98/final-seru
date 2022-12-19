import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as ConfigAPI from "../../api/residents-api";

export const fetchResidents = createAsyncThunk("/residents", async (token) => {
  const residents = await ConfigAPI.getAllResidents(token);
  return residents;
});

export const saveResident = createAsyncThunk(
  "/residents/add",
  async (payload) => {
    const residents = await ConfigAPI.createResident(payload);
    return residents;
  }
);

const residentSlice = createSlice({
  name: "residents",
  initialState: {
    residents: [],
  },
  reducers: {
    getResidents: (state, action) => {
      state.residents = action.payload;
    },
    add: (state, action) => {
      state.residents.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResidents.fulfilled, (state, action) => {
        state.residents = action.payload;
      })
      .addCase(fetchResidents.rejected, (state) => {
        state.residents = [];
      });
  },
});

export const { getResidents } = residentSlice.actions;
export default residentSlice;
