import { BlogPostUpdateManyWithoutAuthorsInput } from "./BlogPostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  blogPosts?: BlogPostUpdateManyWithoutAuthorsInput;
  name?: string | null;
};
