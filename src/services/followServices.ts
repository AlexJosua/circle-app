import api from "@/lib/axios";

// Ambil daftar user yang di-follow oleh user tertentu
export const getFollowingUsers = async (id: string) => {
  const res = await api.get(`/users/${id}/following`);
  // Respon backend: [{ following: { id, name, ... } }, ...]
  return res.data.data.map((item: any) => item.following);
};

// Ambil daftar followers dari user tertentu
export const getFollowersUsers = async (id: string) => {
  const res = await api.get(`/users/${id}/followers`);
  // Respon backend: [{ follower: { id, name, ... } }, ...]
  return res.data.data.map((item: any) => item.follower);
};

// Ikuti user lain
export const followUser = async (targetUserId: string) => {
  await api.post(`/users/${targetUserId}/follow`);
};

// Berhenti mengikuti user
export const unfollowUser = async (targetUserId: string) => {
  await api.delete(`/users/${targetUserId}/unfollow`);
};
