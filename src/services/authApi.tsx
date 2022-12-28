import { headers } from "./api-config";
export async function login(credentials:string) {
  const response = await fetch(`http://localhost:4000/login`, {
    headers,
    method: "POST",
    body: JSON.stringify(credentials),
  });
  return await response.json();
}
