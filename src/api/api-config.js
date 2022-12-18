const BASE_API_URL = "http://localhost:4000";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export async function getAllUnits() {
  headers["Authorization"] = JSON.parse(
    localStorage.getItem("userLogged")
  ).token;
  const response = await fetch(`${BASE_API_URL}/units?_expand=resident`, {
    headers,
    method: "GET",
  });
  return await response.json();
}

export async function getUnitsByFilter(payload) {
  headers["Authorization"] = JSON.parse(
    localStorage.getItem("userLogged")
  ).token;
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
  headers["Authorization"] = JSON.parse(
    localStorage.getItem("userLogged")
  ).token;
  const response = await fetch(`${BASE_API_URL}/units`, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function getUnitsById(id) {
  headers["Authorization"] = JSON.parse(
    localStorage.getItem("userLogged")
  ).token;
  const response = await fetch(`${BASE_API_URL}/units/${id}?_expand=resident`, {
    headers,
    method: "GET",
  });
  return await response.json();
}

export async function updateUnit(unit) {
  headers["Authorization"] = JSON.parse(
    localStorage.getItem("userLogged")
  ).token;
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

export async function getAllTransaction() {
  headers["Authorization"] = JSON.parse(
    localStorage.getItem("userLogged")
  ).token;
  const response = await fetch(
    `${BASE_API_URL}/transactions?_expand=resident&_expand=unit`,
    {
      headers,
      method: "GET",
    }
  );

  return await response.json();
}

export async function getTransactionById(payload) {
  headers["Authorization"] = JSON.parse(
    localStorage.getItem("userLogged")
  ).token;
  const response = await fetch(
    `${BASE_API_URL}/transactions/${payload}?_expand=resident&_expand=unit`,
    {
      headers,
      method: "GET",
    }
  );
  return await response.json();
}

export async function createTransaction(data) {
  headers["Authorization"] = JSON.parse(
    localStorage.getItem("userLogged")
  ).token;
  const response = await fetch(`${BASE_API_URL}/transactions`, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });
  return await response.json();
}

// ---------------------------

export async function getAllResidents() {
  headers["Authorization"] = JSON.parse(
    localStorage.getItem("userLogged")
  ).token;
  const response = await fetch(`${BASE_API_URL}/residents`, {
    headers,
    method: "GET",
  });

  return await response.json();
}

export async function createResident(resident) {
  headers["Authorization"] = JSON.parse(
    localStorage.getItem("userLogged")
  ).token;
  const response = await fetch(`${BASE_API_URL}/residents`, {
    headers,
    method: "POST",
    body: JSON.stringify(resident),
  });
  return await response.json();
}
