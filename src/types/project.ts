export type ProjectFilter = {
  search: string;
  userIds: number[];
  showUserIssues: boolean;
  lastUpdated: boolean;
};

export type User = {
  id: number;
  name: string;
  avatarUrl?: string;
};

export type IssuePreview = {
  id: number;
  title: string;
  description: string;
  assigneeIds: number[];
  priority: string;
  status: string;
  type: string;
  assignees: User[];
};

export type Project = {
  id: number;
  title: string;
  category: string;
  url: string;
  description: string;
  createdAt: Date;
  users: User[];
  issues: IssuePreview[];
};

export type IssuesFilter = {
  query?: string;
  assigneeIds?: number[];
};

export type ProjectSettings = {
  title: string;
  category: string;
  url: string;
  description: string;
};
