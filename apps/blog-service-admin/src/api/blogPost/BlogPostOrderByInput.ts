import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  authorId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publishDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
