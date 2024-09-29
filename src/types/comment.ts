type User = any; // todo replace with read User type

export type Comment = {
  id: number;
  body: string;
  userId: number;
  user: User;
  createdAt: Date;
};

export type CreateCommentPayload = {
  issueId: number;
  userId: number;
  body: string;
};

export type DeleteCommentPayload = {
  issueId: number;
  commentId: number;
};
