export type ProjectFilter = {
  search: string;
  userIds: number[];
  showUserIssues: boolean;
  lastUpdated: boolean;
};

export interface User {
  id: number;
  name: string;
  avatarUrl?: string;
}

export interface IssuePreview {
  id: number;
  title: string;
  description: string;
  assigneeIds: number[];
  priority: string;
  status: string;
  type: string;
  assignees: User[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  url: string;
  description: string;
  createdAt: Date;
  users: User[];
  issues: IssuePreview[];
}

export interface IssuesFilter {
  query?: string;
  assigneeIds?: number[];
}

export interface ProjectSettings {
  title: string;
  category: string;
  url: string;
  description: string;
}
