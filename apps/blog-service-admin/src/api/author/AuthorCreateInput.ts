import { BlogPostCreateNestedManyWithoutAuthorsInput } from "./BlogPostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  blogPosts?: BlogPostCreateNestedManyWithoutAuthorsInput;
  name?: string | null;
};
