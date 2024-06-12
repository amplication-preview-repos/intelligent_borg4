import { BlogPost } from "../blogPost/BlogPost";

export type Comment = {
  blogPost?: BlogPost | null;
  createdAt: Date;
  id: string;
  text: string | null;
  updatedAt: Date;
};
