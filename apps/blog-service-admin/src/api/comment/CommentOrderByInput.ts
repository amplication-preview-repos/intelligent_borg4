import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  blogPostId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
