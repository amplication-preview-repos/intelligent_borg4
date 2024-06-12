import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CommentWhereInput = {
  blogPost?: BlogPostWhereUniqueInput;
  id?: StringFilter;
  text?: StringNullableFilter;
};
