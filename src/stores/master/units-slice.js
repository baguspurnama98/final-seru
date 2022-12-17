import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api/api-config";

export const getUnits = createAsyncThunk("units/fetch", async (token) => {
  const units = await API.getAllUnits(token);
  return units;
});

export const createUnit = createAsyncThunk("units/create", async (data) => {
  const units = await API.createUnit(data);
  return units;
});

// export const deleteUnit = createAsyncThunk("units/delete", async (token, id)=>{
//   const units = await API.saveUnits(token, id);
//   return units;
// })

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

    update: (state, action) => {
      state.units[action.payload.idx] = action.payload.unit;
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

export const { getData, add, update, remove } = unitsSlice.actions;
export default unitsSlice;
