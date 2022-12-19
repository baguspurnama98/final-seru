export const getToken = () =>
  localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null;

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
};

export async function getAllUnits() {
  const response = await fetch(`/api/units?_expand=resident`, {
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
  console.log(url);
  const response = await fetch(`/api/units?${url}&_expand=resident`, {
    headers,
    method: "GET",
  });
  return await response.json();
}

export async function sortUnits(payload) {
  const response = await fetch(
    `/api/units?_sort=${payload.price}&_order=${payload.order}&_expand=resident`,
    {
      headers,
      method: "GET",
    }
  );
  return await response.json();
}

export async function createUnit(data) {
  const response = await fetch(`/api/units`, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function getUnitsById(id) {
  const response = await fetch(`/api/units/${id}?_expand=resident`, {
    headers,
    method: "GET",
  });
  return await response.json();
}

export async function updateUnit(unit) {
  const response = await fetch(`/api/units/${unit.id}`, {
    headers,
    method: "PUT",
    body: JSON.stringify(unit),
  });
  return await response.json();
}

export async function deleteUnit(id) {
  const response = await fetch(`/api/units/${id}`, {
    headers,
    method: "DELETE",
  });
  return await response.json();
}

// ----------------,s,,

export async function getAllTransaction() {
  const response = await fetch(
    `/api/transactions?_expand=resident&_expand=unit`,
    {
      headers,
      method: "GET",
    }
  );

  return await response.json();
}

export async function getTransactionById(payload) {
  const response = await fetch(
    `/api/transactions/${payload}?_expand=resident&_expand=unit`,
    {
      headers,
      method: "GET",
    }
  );
  return await response.json();
}

export async function createTransaction(data) {
  const response = await fetch(`/api/transactions`, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function getTransactionsByFilter(payload) {
  let url = [];
  if (payload.floor !== "0" && payload.floor) {
    url.push(`floor=${payload.floor}`);
  }
  if (payload.status) {
    url.push(`status=${payload.status}`);
  }
  url = url.join("&");
  console.log(url);

  const response = await fetch(
    `/api/transactions?_expand=resident&_expand=unit?${url}`,
    {
      headers,
      method: "GET",
    }
  );
  return await response.json();
}

// ---------------------------

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
