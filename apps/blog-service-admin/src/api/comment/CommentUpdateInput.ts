import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentUpdateInput = {
  blogPost?: BlogPostWhereUniqueInput | null;
  text?: string | null;
};
