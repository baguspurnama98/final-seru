import axios from "axios"
import { headers } from "../api/api-config";
const URL_PREFIX = "http://localhost:4000"
console.log(headers);

export const Api = axios.create({
	baseURL: URL_PREFIX, //YOUR_API_URL HERE
	headers
})