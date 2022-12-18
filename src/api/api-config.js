const BASE_API_URL = "http://localhost:4000";
const userLogged = JSON.parse(localStorage.getItem("userLogged"));

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `${userLogged.token}`,
};

export async function getAllUnits() {
  const response = await fetch(`${BASE_API_URL}/units?_expand=resident`, {
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

  const response = await fetch(
    `${BASE_API_URL}/units?_expand=resident?${url}`,
    {
      headers,
      method: "GET",
    }
  );
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

export async function getUnitsById(id) {
  const response = await fetch(`${BASE_API_URL}/units/${id}?_expand=resident`, {
    headers,
    method: "GET",
  });
  return await response.json();
}

export async function updateUnit(unit) {
  const response = await fetch(`${BASE_API_URL}/units/${unit.id}`, {
    headers,
    method: "PUT",
    body: JSON.stringify(unit),
  });
  return await response.json();
}

export async function deleteUnit(id) {
  const response = await fetch(`${BASE_API_URL}/units/${id}`, {
    headers,
    method: "DELETE",
  });
  return await response.json();
}

// ----------------

export async function getAllTransaction(token) {
  headers["Authorization"] = `${token}`;
  const response = await fetch(`${BASE_API_URL}/transactions`, {
    headers,
    method: "GET",
  });

  return await response.json();
}

export async function getTransactionById(payload) {
  headers["Authorization"] = `${payload.token}`;
  const response = await fetch(
    `${BASE_API_URL}/transactions/${payload.id}?_expand=resident&_expand=unit`,
    {
      headers,
      method: "GET",
    }
  );
  return await response.json();
}

export async function getAllResidents(token) {
  headers["Authorization"] = `${token}`;
  const response = await fetch(`${BASE_API_URL}/residents`, {
    headers,
    method: "GET",
  });

  return await response.json();
}

export async function createResident(resident) {
  const response = await fetch(`${BASE_API_URL}/residents`, {
    headers,
    method: "POST",
    body: JSON.stringify(resident),
  });
  return await response.json();
}
