import {headers} from './api-config'

export async function login(credentials) {
  const response = await fetch(`/api/login`, {
    headers,
    method: "POST",
    body: JSON.stringify(credentials),
  });
  return await response.json();
}
