import { Unit } from "../model/units";
import { apartmentApi, EXPAND_RESIDENT, UNIT_URL } from "./index";

// <Unit[], void>: <response type ; argument of params type>
// providesTags: menerima trigger untuk menjalankan fungsi diri sendiri
// invalidatesTags: memberi trigger untuk menjalankan fungsi lain

interface UnitParams {
  floor?: number | "";
  status?: string;
  rentSchema?: string;
  sortValue?: string;
  price?: string;
  order?: string;
}

const getUnitParams = (dto: UnitParams) => {
  const params: any = {};
  if (dto.floor !== 0) {
    params.floor = dto.floor;
  }
  if (dto.status !== "") {
    params.status = dto.status;
  }
  if (dto.rentSchema !== "") {
    params.rentSchema = dto.rentSchema;
  }
  if(dto.price !== "") {
    params._sort = dto.price
  }
  if(dto.order !== "") {
    params._order = dto.order
  }
  return params;
};

export const unitsApi = apartmentApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    createUnit: builder.mutation<void, Unit>({
      query: (data) => ({
        url: UNIT_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["MasterMappingUnits"],
    }),

    getUnits: builder.query<Unit[], UnitParams>({
      query: (dto) => (
        console.log(getUnitParams(dto)),
        {
          url: `${UNIT_URL}?${EXPAND_RESIDENT}`,
          method: "GET",
          params: getUnitParams(dto),
        }
      ),
      providesTags: ["MasterMappingUnits"], //providesTags = query
    }),

    getUnit: builder.query<Unit, string>({
      query: (id) => ({
        url: `${UNIT_URL}/${id}?${EXPAND_RESIDENT}`,
        method: "GET",
      }),
    }),

    updateUnit: builder.mutation<void, Unit>({
      query: (data) => ({
        url: `${UNIT_URL}/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["MasterMappingUnits"], // invalidatesTags = mutation
    }),

    deleteUnit: builder.mutation<void, string>({
      query: (id) => ({
        url: `${UNIT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MasterMappingUnits"],
    }),

    filterUnits: builder.query<Unit[], string>({
      query: (url) => ({
        url: `${UNIT_URL}?${url}&${EXPAND_RESIDENT}`,
        method: "GET",
      }),
    }),

    searchUnit: builder.query<Unit[], string>({
      query: (query) => ({
        url: `${UNIT_URL}?q=${query}`,
        method: "GET",
      }),
    }),

    sortUnits: builder.query({
      query: (params) => ({
        url: `/api/units?_sort=${params.sortBy}&_order=${params.order}&${EXPAND_RESIDENT}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUnitQuery,
  useLazyGetUnitsQuery,
  useGetUnitsQuery,
  useCreateUnitMutation,
  useDeleteUnitMutation,
  useUpdateUnitMutation,
  useFilterUnitsQuery,
  useSearchUnitQuery,
  useSortUnitsQuery,
} = unitsApi;
