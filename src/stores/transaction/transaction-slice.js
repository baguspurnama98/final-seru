import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as ConfigAPI from '../../api/api-config';

export const fetchTransactions = createAsyncThunk(
  '/transactions',
  async (token) => {
    const transactions = await ConfigAPI.getAllTransaction(token);
    return transactions;
  }
);

export const fetchTransactionsbyId = createAsyncThunk(
  '/transactions/id',
  async (payload) => {
    const transactions = await ConfigAPI.getTransactionById(payload);
    return transactions;
  }
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
  },
  reducers: {
    getTransaction: (state, action) => {
      state.guests = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state) => {
        state.transactions = [];
      });
  },
});

export const { getTransaction } = transactionSlice.actions;
export default transactionSlice;
