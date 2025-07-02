import api from "../lib/axios";

//Login
export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  const { token, user } = response.data;

  if (token && user?.id) {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", user.id);
  }

  return response.data;
};

//Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
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
