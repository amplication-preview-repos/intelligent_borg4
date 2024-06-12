import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentUpdateManyWithoutBlogPostsInput } from "./CommentUpdateManyWithoutBlogPostsInput";

export type BlogPostUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutBlogPostsInput;
  content?: string | null;
  publishDate?: Date | null;
  title?: string | null;
};
