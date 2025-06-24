import api from "../lib/axios";

export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  const token = response.data.token;

  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};
