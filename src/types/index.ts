export type User = {
  id: string;
  name: string;
  username: string;
  photo?: string;
};

export type DropDownProps = {
  postId: string;
  content: string;
  onSuccess?: () => void;
};
