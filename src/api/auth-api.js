const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export async function login(credentials) {
  const response = await fetch(`http://localhost:4000/login`, {
    headers,
    method: "POST",
    body: JSON.stringify(credentials),
  });
  return await response.json();
}
