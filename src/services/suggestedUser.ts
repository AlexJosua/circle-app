import api from "@/lib/axios";

export const getSuggestedUsers = async () => {
  const res = await api.get("/users/suggested");
  return res.data.data;
};
