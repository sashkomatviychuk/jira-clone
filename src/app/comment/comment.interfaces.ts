import { User } from 'app/project/project.interfaces';

export interface Comment {
  id: number;
  body: string;
  userId: number;
  user: User;
  createdAt: Date;
}

export interface CreateCommentPayload {
  issueId: number;
  userId: number;
  body: string;
}

export interface DeleteCommentPayload {
  issueId: number;
  commentId: number;
}
