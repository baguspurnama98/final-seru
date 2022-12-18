import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as ConfigAPI from '../../api/api-config';

export const fetchResidents = createAsyncThunk('/residents', async (token) => {
  const residents = await ConfigAPI.getAllResidents(token);
  return residents;
});

export const saveResident = createAsyncThunk('/residents', async (guest) => {
  const residents = await ConfigAPI.createResident(guest);
  return residents;
});

export const fetchResidentsbyId = createAsyncThunk(
  '/residents/id',
  async (payload) => {
    const residents = await ConfigAPI.getResidentById(payload);
    return residents;
  }
);

const residentSlice = createSlice({
  name: 'residents',
  initialState: {
    residents: [],
  },
  reducers: {
    getResidents: (state, action) => {
      state.guests = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveResident.fulfilled, (state, action) => {
        state.residents = action.payload;
      })
      .addCase(saveResident.rejected, (state) => {
        state.residents = [];
      });
  },
});

export const { getResidents } = residentSlice.actions;
export default residentSlice;
