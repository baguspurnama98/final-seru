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

export const LOGIN_URL = "login"
export const UNIT_URL = "units"
export const TRANSACTION_URL = "transactions"
export const RESIDENT_URL = "residents"
export const EXPAND_RESIDENT = "_expand=resident"
export const EXPAND_UNIT = "_expand=unit"