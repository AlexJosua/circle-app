import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ganti sesuai backend kamu
});

// Tambahkan token secara otomatis jika ada
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
