import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as ConfigAPI from "../../api/transactions-api";

export const fetchTransactions = createAsyncThunk("/transactions", async () => {
  const transactions = await ConfigAPI.getAllTransaction();
  return transactions;
});

export const fetchTransactionsbyId = createAsyncThunk(
  "/transactions/id",
  async (payload) => {
    const transactions = await ConfigAPI.getTransactionById(payload);
    return transactions;
  }
);

export const createTransaction = createAsyncThunk(
  "transactions/create",
  async (data) => {
    const transactions = await ConfigAPI.createTransaction(data);
    return transactions;
  }
);

export const getTransactionsByFilter = createAsyncThunk(
  "transactions/filter",
  async (data) => {
    const transactions = await ConfigAPI.getTransactionsByFilter(data);
    return transactions;
  }
);

const transactionSlice = createSlice({
  name: "transactions",
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
      })
      .addCase(getTransactionsByFilter.fulfilled, (state, action) => {
        state.transactions = action.payload;
      })
      .addCase(getTransactionsByFilter.rejected, (state) => {
        state.transactions = [];
      });
  },
});

export const { getTransaction } = transactionSlice.actions;
export default transactionSlice;
