import { Author } from "../author/Author";
import { Comment } from "../comment/Comment";

export type BlogPost = {
  author?: Author | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  publishDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
