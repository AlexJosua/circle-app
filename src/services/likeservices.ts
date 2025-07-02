// src/services/likeServices.ts
import api from "@/lib/axios";

// Like a post
export const likePost = async (postId: number | string) => {
  return await api.post(`/posts/${postId}/like`);
};

// Unlike a post
export const unlikePost = async (postId: number | string) => {
  return await api.delete(`/posts/${postId}/unlike`);
};
