import api from "../lib/axios";

//Login
export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  const token = response.data.token;

  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};

//Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
};

//Register
type RegisterFormData = {
  name: string;
  username: string;
  email: string;
  password: string;
  bio?: string;
  photo?: string;
};

export const registerUser = async (data: RegisterFormData) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};
