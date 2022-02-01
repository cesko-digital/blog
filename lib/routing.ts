import { BlogPost } from "./post";

export const Route = {
  toPost: (post: BlogPost) => post.path,
};
