const BASE_API_URL = "http://localhost:4000";
const userLogged = JSON.parse(localStorage.getItem("userLogged")) || "";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `${userLogged.token}`,
};

export async function getAllUnits() {
  const response = await fetch(`${BASE_API_URL}/units`, {
    headers,
    method: "GET",
  });
  return await response.json();
}

export async function getUnitsByFilter(payload) {
  let url = [];
  if (payload.floor !== "0" && payload.floor) {
    url.push(`floor=${payload.floor}`);
  }
  if (payload.status) {
    url.push(`status=${payload.status}`);
  }
  if (payload.rentSchema) {
    url.push(`rentSchema=${payload.rentSchema}`);
  }
  url = url.join("&");

  const response = await fetch(`${BASE_API_URL}/units?${url}`, {
    headers,
    method: "GET",
  });
  return await response.json();
}

export async function createUnit(data) {
  const response = await fetch(`${BASE_API_URL}/units`, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });
  return await response.json();
}

// export async function updateGuest(guest) {
//   const response = await fetch(`${apiGuestURL}/${guest.id}`, {
//     headers,
//     method: "PUT", // perhatikan request method-nya dari dokumentasi BE untuk setiap request update data.
//     body: JSON.stringify(guest),
//   });

//   return await response.json();
// }

// export async function deleteGuest(id) {
//   const response = await fetch(`${apiGuestURL}/${id}`, {
//     headers,
//     method: "DELETE",
//   });

//   return await response.json();
// }
