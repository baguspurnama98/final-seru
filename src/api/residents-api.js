import { headers } from "./api-config";

export async function getAllResidents() {
  const response = await fetch(`/api/residents`, {
    headers,
    method: "GET",
  });

  return await response.json();
}

export async function createResident(resident) {
  const response = await fetch(`/api/residents`, {
    headers,
    method: "POST",
    body: JSON.stringify(resident),
  });
  return await response.json();
}
