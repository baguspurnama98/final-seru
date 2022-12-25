import { Unit } from "../model/units";
import { apartmentApi } from "./index";

// <Unit[], void>: <response type ; argument of params type>
// providesTags: menerima trigger untuk menjalankan fungsi diri sendiri
// invalidatesTags: memberi trigger untuk menjalankan fungsi lain

export const unitsApi = apartmentApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getUnits: builder.query<Unit[], void>({
      query: () => ({
        url: "/units?_expand=resident",
        method: "GET",
      }),
      providesTags: ["MasterMappingUnits"], //providesTags = query
    }),

    getUnit: builder.query<Unit, number>({
      query: (id) => ({
        url: `/units/${id}?_expand=resident`,
        method: "GET",
        // params: { id },
      }),
    }),

    createUnit: builder.mutation<void, Unit>({
      query: (data) => ({
        url: `/units`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["MasterMappingUnits"],
    }),

    updateUnit: builder.mutation<void, Unit>({
      query: (data) => ({
        url: `/units/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["MasterMappingUnits"], // invalidatesTags = mutation
    }),

    deleteUnit: builder.mutation<void, number>({
      query: (id) => ({
        url: `/units/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MasterMappingUnits"],
    }),

    filterUnits: builder.query<Unit[], string>({
      query: (url) => ({
        url: `/api/units?${url}&_expand=resident`,
        method: "GET",
      }),
    }),

    searchUnit: builder.query<Unit[], string>({
      query: (query) => ({
        url: `/api/units?q=${query}`,
        method: "GET",
      }),
    }),

    sortUnits: builder.query({
      query: (params) => ({
        url: `/api/units?_sort=${params.sortBy}&_order=${params.order}&_expand=resident`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUnitQuery,
  useGetUnitsQuery,
  useCreateUnitMutation,
  useDeleteUnitMutation,
  useUpdateUnitMutation,
  useFilterUnitsQuery,
  useSearchUnitQuery,
  useSortUnitsQuery,
} = unitsApi;
