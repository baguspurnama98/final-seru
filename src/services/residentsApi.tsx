import { apartmentApi } from ".";
import { Resident } from "../model/resident";

export const residentApi = apartmentApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getResidents: builder.query<Resident[], void>({
      query: () => ({
        url: "/residents",
        method: "GET",
      }),
      providesTags: ["MasterMappingResidents"],
    }),

    getResident: builder.query<Resident, number>({
      query: (id) => ({
        url: `/residents/${id}`,
        method: "GET",
        params: { id },
      }),
    }),

    updateResident: builder.mutation<void, Resident>({
      query: (data) => ({
        url: `/residents/${data.id}`,
        method: "UPDATE",
        data: data,
      }),
      invalidatesTags: ["MasterMappingResidents"], // invalidatesTags = mutation
    }),

    deleteUnit: builder.mutation<void, number>({
      query: (id) => ({
        url: `/residents/${id}`,
        method: "DELETE",
        params: { id },
      }),
      invalidatesTags: ["MasterMappingResidents"],
    }),
  }),
});

export const {
  useGetResidentsQuery,
  useGetResidentQuery,
  useUpdateResidentMutation,
  useDeleteUnitMutation,
} = residentApi;
