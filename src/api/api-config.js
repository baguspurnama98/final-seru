export const getToken = () => localStorage.getItem("token")
? JSON.parse(localStorage.getItem("token"))
: null;

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`
};
