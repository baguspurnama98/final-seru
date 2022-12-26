import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import {axiosBaseQuery} from "redux/api/axiosBaseQuery"
import { headers } from "./api-config";

export const apartmentApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/", headers: headers }),
    reducerPath: "apartmentApi",
    keepUnusedDataFor: 0,
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    tagTypes: [
        "MasterMappingUnits",
        "MasterMappingTransactions",
        "MasterMappingResidents",
    ],
    endpoints: () => ({})
})