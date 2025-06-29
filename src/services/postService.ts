import api from "@/lib/axios";

export const getAllPosts = async () => {
  const res = await api.get("/post");
  return res.data.data;
};

export const createPost = async (formData: FormData) => {
  const res = await api.post("/post", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const getPostById = async (id: string) => {
  const res = await api.get(`/post/${id}`);
  return res.data.data;
};
