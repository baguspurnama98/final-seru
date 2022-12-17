import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api/api-config";

export const getUnits = createAsyncThunk("/units", async (token) => {
  const units = await API.getAllUnits(token);
  return units;
});

const unitsSlice = createSlice({
  name: "units",
  initialState: {
    units: [],
  },

  reducers: {
    getData: (state, action) => {
      state.units = action.payload;
    },

    add: (state, action) => {
      state.units.push(action.payload);
    },

    upDate: (state, action) => {
      state.units[action.payload.idx] = action.payload.units;
    },

    remove: (state, action) => {
      state.units.splice(action.payload.idx, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUnits.fulfilled, (state, action) => {
        state.units = action.payload;
      })

      .addCase(getUnits.rejected, (state, action) => {
        state.units = [];
      });
  },
});

export const { getData, add, upDate, remove } = unitsSlice.actions;

export default unitsSlice;
