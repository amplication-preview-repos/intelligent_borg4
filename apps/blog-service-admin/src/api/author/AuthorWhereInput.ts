import { BlogPostListRelationFilter } from "../blogPost/BlogPostListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AuthorWhereInput = {
  blogPosts?: BlogPostListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
