// src/services/userService.ts
import api from "@/lib/axios";

export const getMyProfile = async () => {
  const res = await api.get("/user/me");
  return res.data.data;
};

export const getUserProfile = async (username: string) => {
  const res = await api.get(`user/profile/${username}`);
  return res.data.data;
};

export const updateProfile = async (formData: FormData) => {
  const res = await api.put("/user/me", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data;
};
