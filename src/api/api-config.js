const apiGuestURL = "/api/";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export async function getAllUnits() {
  const response = await fetch(apiGuestURL);

  return await response.json();
}

// export async function createGuest(guest) {
//   const response = await fetch(apiGuestURL, {
//     headers,
//     method: "POST",
//     body: JSON.stringify(guest),
//   });

//   return await response.json();
// }

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
