import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentCreateInput = {
  blogPost?: BlogPostWhereUniqueInput | null;
  text?: string | null;
};
