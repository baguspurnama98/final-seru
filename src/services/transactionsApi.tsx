import { apartmentApi } from ".";
import { Transaction } from "../model/transaction";

export const transactionApi = apartmentApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    createTransaction: builder.mutation<void, Transaction>({
      query: (data) => ({
        url: `/transactions`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["MasterMappingTransactions"],
    }),

    getTransactions: builder.query<Transaction[], void>({
      query: () => ({
        url: "/transactions",
        method: "GET",
      }),
      providesTags: ["MasterMappingTransactions"],
    }),

    getTransaction: builder.query<Transaction, number>({
      query: (id) => ({
        url: `/transactions/${id}`,
        method: "GET",
        params: { id },
      }),
    }),

    updateTransaction: builder.mutation<void, Transaction>({
      query: (data) => ({
        url: `/transactions/${data.id}`,
        method: "UPDATE",
        data: data,
      }),
      invalidatesTags: ["MasterMappingTransactions"], // invalidatesTags = mutation
    }),

    deleteTransaction: builder.mutation<void, number>({
      query: (id) => ({
        url: `/transactions/${id}`,
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
