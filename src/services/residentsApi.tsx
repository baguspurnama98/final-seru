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
      }),
    }),

    createResident: builder.mutation<void, Resident>({
      query: (data) => ({
        url: `/residents`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["MasterMappingResidents"],
    }),
    
    updateResident: builder.mutation<void, Resident>({
      query: (data) => ({
        url: `/residents/${data.id}`,
        method: "UPDATE",
        body: data,
      }),
      invalidatesTags: ["MasterMappingResidents"], // invalidatesTags = mutation
    }),

    deleteUnit: builder.mutation<void, number>({
      query: (id) => ({
        url: `/residents/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MasterMappingResidents"],
    }),
  }),
});

export const {
  useGetResidentsQuery,
  useGetResidentQuery,
  useCreateResidentMutation,
  useUpdateResidentMutation,
  useDeleteUnitMutation,
} = residentApi;
