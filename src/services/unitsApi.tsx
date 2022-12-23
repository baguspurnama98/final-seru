import { Unit } from "../model/units";
import { apartmentApi } from "./index";

export const unitsApi = apartmentApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getUnits: builder.query<Unit[], void>({
      // response ; argumen params
      query: () => ({
        url: "/units?_expand=resident",
        method: "GET",
      }),
      providesTags: ["MasterMappingUnits"], //providesTags = query
    }),

    getUnit: builder.query<Unit, number>({
      query: (id) => ({
        url: `/unit/${id}?_expand=resident`,
        method: "GET",
        params: { id },
      }),
    }),

    updateUnit: builder.mutation<void, Unit>({
      query: (data) => ({
        url: `/units/${data.id}`,
        method: "UPDATE",
        data: data,
      }),
      invalidatesTags: ["MasterMappingUnits"], // invalidatesTags = mutation
    }),

    deleteUnit: builder.mutation<void, number>({
      query: (id) => ({
        url: `/unit/${id}`,
        method: "DELETE",
        params: { id },
      }),
      invalidatesTags: ["MasterMappingUnits"],
    }),

    filterUnit: builder.query<Unit[], string>({
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
  }),
});

export const {
  useGetUnitQuery,
  useGetUnitsQuery,
  useDeleteUnitMutation,
  useUpdateUnitMutation,
  useFilterUnitQuery,
  useSearchUnitQuery,
} = unitsApi;
