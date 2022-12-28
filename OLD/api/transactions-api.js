import { headers } from "./api-config";

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
