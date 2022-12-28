import { EXPAND_RESIDENT, EXPAND_UNIT, TRANSACTION_URL, apartmentApi } from ".";
import { Transaction } from "../model/transaction";

export const transactionApi = apartmentApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    createTransaction: builder.mutation<void, Transaction>({
      query: (data) => ({
        url: TRANSACTION_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["MasterMappingTransactions"],
    }),

    getTransactions: builder.query<Transaction[], void>({
      query: () => ({
        url: `${TRANSACTION_URL}?${EXPAND_RESIDENT}&${EXPAND_UNIT}`,
        method: "GET",
      }),
      providesTags: ["MasterMappingTransactions"],
    }),

    getTransaction: builder.query<Transaction, string>({
      query: (id) => ({
        url: `${TRANSACTION_URL}/${id}?${EXPAND_RESIDENT}&${EXPAND_UNIT}`,
        method: "GET",
      }),
    }),

    updateTransaction: builder.mutation<void, Transaction>({
      query: (data) => ({
        url: `${TRANSACTION_URL}/${data.id}`,
        method: "UPDATE",
        data: data,
      }),
      invalidatesTags: ["MasterMappingTransactions"], // invalidatesTags = mutation
    }),

    deleteTransaction: builder.mutation<void, string>({
      query: (id) => ({
        url: `${TRANSACTION_URL}/${id}`,
        method: "DELETE",
        params: { id },
      }),
      invalidatesTags: ["MasterMappingTransactions"],
    }),
  }),
});

export const {
  useCreateTransactionMutation,
  useGetTransactionsQuery,
  useGetTransactionQuery,
  useUpdateTransactionMutation,
  useDeleteTransactionMutation,
} = transactionApi;
