import { IssuePriority, IssueType } from 'types/issue';

export interface CommentModel extends ID {
  userId: number;
  body: string;
  createdAt: Date;
}

export interface UserModel extends ID {
  name: string;
  avatarUrl?: string;
}

export interface IssueModel extends ID {
  title: string;
  description: string;
  assigneeIds: number[];
  commetIds: number[];
  reporterId: Nullable<number>;
  priority: IssuePriority;
  status: string;
  type: IssueType;
  timeSpent: number;
  estimate: Nullable<number>;
  createdAt: Date;
  updatedAt: Date;
  position: number;
}

export interface ProjectModel extends ID {
  userIds: number[];
  issueIds: number[];
  title: string;
  category: string;
  url: string;
  description: string;
  createdAt: Date;
}

export interface ID {
  id: number;
}

export interface UpdateProjectPayload {
  title: string;
  category: string;
  url: string;
  description: string;
}

export interface CreateIssuePayload {
  title: string;
  description: string;
  priority: IssuePriority;
  type: IssueType;
  assigneeIds: number[];
  reporterId: number;
}

export interface UpdateIssuePayload {
  title?: string;
  description?: string;
  priority?: string;
  type?: string;
  assigneeIds?: number[];
  reporterId?: number;
  status?: string;
  timeSpent?: number;
  estimate?: Nullable<number>;
}

export interface IssuesFilter {
  query?: string;
  assigneeIds?: number[];
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
