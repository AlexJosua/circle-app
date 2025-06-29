import api from "@/lib/axios";

export const createComment = async (postId: string, content: string) => {
  const res = await api.post(`/posts/${postId}/comments`, { content });
  return res.data.data;
};
