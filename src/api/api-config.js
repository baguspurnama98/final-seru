const BASE_API_URL = 'http://localhost:4000';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export async function getAllTransaction(token) {
  headers['Authorization'] = `${token}`;
  const response = await fetch(`http://localhost:4000/transactions`, {
    headers,
    method: 'GET',
  });

  return await response.json();
}

export async function getAllResidents(token) {
  headers['Authorization'] = `${token}`;
  const response = await fetch(`http://localhost:4000/residents`, {
    headers,
    method: 'GET',
  });

  return await response.json();
}

export async function createResident(resident) {
  const response = await fetch(`http://localhost:4000/residents`, {
    headers,
    method: 'POST',
    body: JSON.stringify(resident),
  });
  return await response.json();
}

export async function getAllUnits(token) {
  headers['Authorization'] = `${token}`;
  const response = await fetch(`${BASE_API_URL}/units`, {
    headers,
    method: 'GET',
  });
  return await response.json();
}

export async function createUnit(data) {
  // headers["Authorization"] = `${data.token}`;
  // console.log(data);
  const response = await fetch(`${BASE_API_URL}/units`, {
    headers,
    method: 'POST',
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
