import { $host, $authHost } from ".";
import jwt_decode from "jwt-decode";

export const registration = async (email, login, password) => {
  const {data} = await $host.post("api/user/registration", {
    email,
    login,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

export const signIn = async (login, password) => {
  const {data} = await $host.post("api/user/login", {
    login,
    password,
  });
  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

export const check = async () => {
  const result = await $authHost.get("api/user/auth");
  localStorage.setItem("token", result.data.token);

  return jwt_decode(result.data.token);
};
