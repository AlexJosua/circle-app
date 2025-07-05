import api from "@/lib/axios";

export const getAllPosts = async () => {
  const res = await api.get("/posts");
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

export const getPostsByUserId = async (id: string) => {
  const res = await api.get(`/post/user/${id}`);
  return res.data.data;
};

export const editPost = async (id: string, data: FormData) => {
  const res = await api.put(`/post/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// DELETE POST
export const deletePost = async (id: string) => {
  const res = await api.delete(`/post/${id}`);
  return res.data;
};
