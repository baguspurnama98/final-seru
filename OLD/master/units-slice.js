// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import * as API from "../../api/units-api";

// export const getUnits = createAsyncThunk("units/fetch", async (token) => {
//   const units = await API.getAllUnits(token);
//   return units;
// });

// export const createUnit = createAsyncThunk("units/create", async (data) => {
//   const units = await API.createUnit(data);
//   return units;
// });

// export const getUnitByFilter = createAsyncThunk(
//   "units/filter",
//   async (data) => {
//     const units = await API.getUnitsByFilter(data);
//     return units;
//   }
// );
// export const sortUnits = createAsyncThunk("units/filter", async (data) => {
//   const units = await API.sortUnits(data);
//   return units;
// });

// export const getUnitsById = createAsyncThunk("units/id", async (id) => {
//   const units = await API.getUnitsById(id);
//   return units;
// });

// export const saveUpdate = createAsyncThunk("units/update", async (unit) => {
//   const units = await API.updateUnit(unit);
//   return units;
// });

// export const deleteUnit = createAsyncThunk("units/delete", async (id) => {
//   const units = await API.deleteUnit(id);
//   return units;
// });

// const unitsSlice = createSlice({
//   name: "units",
//   initialState: {
//     units: [],
//     unitSelected: undefined,
//   },
//   reducers: {
//     getData: (state, action) => {
//       state.units = action.payload;
//     },
//     add: (state, action) => {
//       state.units.push(action.payload);
//     },

//     update: (state, action) => {
//       state.units[action.payload.idx] = action.payload.unit;
//     },

//     remove: (state, action) => {
//       state.units.splice(action.payload.idx, 1);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getUnits.fulfilled, (state, action) => {
//         state.units = action.payload;
//       })
//       .addCase(getUnits.rejected, (state, action) => {
//         state.units = [];
//       })
//       .addCase(getUnitByFilter.fulfilled, (state, action) => {
//         state.units = action.payload;
//       })
//       .addCase(getUnitByFilter.rejected, (state, action) => {
//         state.units = [];
//       })
//       .addCase(getUnitsById.fulfilled, (state, action) => {
//         state.unitSelected = action.payload;
//       })
//       .addCase(getUnitsById.rejected, (state, action) => {
//         state.unitSelected = undefined;
//       });
//   },
// });

// export const { getData, add, update, remove } = unitsSlice.actions;
// export default unitsSlice;
