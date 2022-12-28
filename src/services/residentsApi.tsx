import { RESIDENT_URL, apartmentApi } from ".";
import { Resident } from "../model/resident";

export const residentApi = apartmentApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getResidents: builder.query<Resident[], void>({
      query: () => ({
        url: RESIDENT_URL,
        method: "GET",
      }),
      providesTags: ["MasterMappingResidents"],
    }),

    getResident: builder.query<Resident, string>({
      query: (id) => ({
        url: `${RESIDENT_URL}/${id}`,
        method: "GET",
      }),
    }),

    createResident: builder.mutation<void, Resident>({
      query: (data) => ({
        url: RESIDENT_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["MasterMappingResidents"],
    }),

    updateResident: builder.mutation<void, Resident>({
      query: (data) => ({
        url: `${RESIDENT_URL}/${data.id}`,
        method: "UPDATE",
        body: data,
      }),
      invalidatesTags: ["MasterMappingResidents"], // invalidatesTags = mutation
    }),

    deleteResident: builder.mutation<void, number>({
      query: (id) => ({
        url: `${RESIDENT_URL}/${id}`,
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
  useDeleteResidentMutation,
} = residentApi;
