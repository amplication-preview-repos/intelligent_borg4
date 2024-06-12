import { BlogPost } from "../blogPost/BlogPost";

export type Author = {
  blogPosts?: Array<BlogPost>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
