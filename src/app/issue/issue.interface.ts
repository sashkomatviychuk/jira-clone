import { User } from 'app/project/project.interfaces';
import { Comment } from 'app/comment/comment.interfaces';

export enum IssueType {
  bug = 'bug',
  task = 'task',
  story = 'story',
}

export enum IssuePriority {
  highest = 'highest',
  high = 'high',
  low = 'low',
  lowest = 'lowest',
}

export enum IssueStatus {
  backlog = 'backlog',
  todo = 'todo',
  inprogress = 'inprogress',
  done = 'done',
}

export interface CreateIssuePayload {
  title: string;
  description: string;
  priority: IssuePriority;
  type: IssueType;
  assigneeIds: number[];
  reporterId: Nullable<number>;
}

export interface Issue {
  id: number;
  title: string;
  description: string;
  assigneeIds: number[];
  reporterId: Nullable<number>;
  priority: IssuePriority;
  status: string;
  type: IssueType;
  timeSpent: number;
  estimate: Nullable<number>;
  createdAt: Date;
  updatedAt: Date;
  reporter: Nullable<User>;
  assignees: User[];
  comments: Comment[];
  position: number;
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

export interface UpdateIssuePriorityPayload {
  status: IssueStatus;
  position: number;
}
