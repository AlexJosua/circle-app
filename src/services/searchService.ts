import api from "@/lib/axios";

export const searchUsers = async (query: string) => {
  const res = await api.get(`/search?query=${query}`);
  return res.data.data;
};
