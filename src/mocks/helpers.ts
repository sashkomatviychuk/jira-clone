import { Project, User } from 'types/project';
import {
  CommentModel,
  CreateCommentPayload,
  CreateIssuePayload,
  DeleteCommentPayload,
  ID,
  IssueModel,
  IssuesFilter,
  UpdateIssuePayload,
} from './models';
import { comments, issues, nextId, project, users } from './data';
import { Issue } from 'types/issue';
import { Comment } from 'types/comment';
import intersection from 'lodash/intersection';

export const findById = <T extends ID>(entities: T[], id: number): Optional<T> => {
  return entities.find((entity) => entity.id === id);
};

export const findIndexById = <T extends ID>(entities: T[], id: number): number => {
  return entities.findIndex((entity) => entity.id === id);
};

export const findByIds = <T extends ID>(entities: T[], ids: number[]): T[] => {
  return entities.filter((entity) => ids.includes(entity.id));
};

export const deleteById = <T extends ID>(entities: T[], id: number): T[] => {
  return entities.filter((entity) => entity.id !== id);
};

export const updateById = <T extends ID>(
  entities: T[],
  id: number,
  data: Omit<Partial<T>, 'id'>
): Optional<T> => {
  const entity = findById(entities, id);

  if (!entity) {
    return;
  }

  Object.assign(entity, data);

  return entity;
};

export const getProject = (): Project => {
  const _issues = findByIds(issues, project.issueIds);

  return {
    ...project,
    users: findByIds(users, project.userIds),
    issues: _issues.map((issue) => ({
      ...issue,
      assignees: findByIds(users, issue.assigneeIds),
    })),
  };
};

export const getIssues = ({ query, assigneeIds }: IssuesFilter): Issue[] => {
  let _issues = issues;

  if (query) {
    const re = new RegExp(query, 'gi');
    _issues = _issues.filter((issue) => re.test(issue.title));
  }

  if (assigneeIds?.length) {
    _issues = _issues.filter((issue) => intersection(issue.assigneeIds, assigneeIds).length > 0);
  }

  return _issues.map((issue) => {
    const _comments = findByIds(comments, issue.commetIds);

    return {
      ...issue,
      assignees: findByIds(users, issue.assigneeIds),
      reporter: issue.reporterId ? (findById(users, issue.reporterId) as User) : null,
      comments: _comments.map((comment) => ({
        ...comment,
        user: findById(users, comment.userId) as User,
      })),
    };
  });
};

export const getIssue = (id: number): Optional<Issue> => {
  const issue = findById(issues, id);

  if (!issue) {
    return;
  }

  const _comments = findByIds(comments, issue.commetIds);

  return {
    ...issue,
    assignees: findByIds(users, issue.assigneeIds),
    reporter: issue.reporterId ? (findById(users, issue.reporterId) as User) : null,
    comments: _comments.map((comment) => ({
      ...comment,
      user: findById(users, comment.userId) as User,
    })),
  };
};

export const createIssue = (payload: CreateIssuePayload): Issue => {
  const lastIssue = issues
    .filter((issue) => issue.status === 'todo')
    .sort((a, b) => b.position - a.position)[0];

  const issue: IssueModel = {
    id: nextId(),
    ...payload,
    status: 'backlog',
    commetIds: [],
    timeSpent: 0,
    estimate: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    position: lastIssue ? lastIssue.position + 1 : 1,
  };

  issues.push(issue);

  return {
    ...issue,
    assignees: findByIds(users, issue.assigneeIds),
    reporter: issue.reporterId ? (findById(users, issue.reporterId) as User) : null,
    comments: [],
  };
};

export const updateIssue = (id: number, payload: UpdateIssuePayload): Optional<Issue> => {
  const issue = findById(issues, id);

  if (!issue) {
    return;
  }

  Object.assign(issue, { ...payload, updatedAt: new Date() });

  const _comments = findByIds(comments, issue.commetIds);

  return {
    ...issue,
    assignees: findByIds(users, issue.assigneeIds),
    reporter: issue.reporterId ? (findById(users, issue.reporterId) as User) : null,
    comments: _comments.map((comment) => ({
      ...comment,
      user: findById(users, comment.userId) as User,
    })),
  };
};

export const deleteIssue = (id: number): boolean => {
  const idx = findIndexById(issues, id);

  if (idx === -1) {
    return false;
  }

  issues.splice(idx, 1);

  return true;
};

export const createIssueComment = (payload: CreateCommentPayload): Optional<Comment> => {
  const issue = findById(issues, payload.issueId);

  if (!issue) {
    return;
  }

  const comment: CommentModel = {
    id: nextId(),
    userId: payload.userId,
    body: payload.body,
    createdAt: new Date(),
  };

  comments.push(comment);

  issue.commetIds.push(comment.id);

  return { ...comment, user: findById(users, comment.userId) as User };
};

export const deleteIssueComment = ({ issueId, commentId }: DeleteCommentPayload): boolean => {
  const issue = findById(issues, issueId);

  if (!issue) {
    return false;
  }

  issue.commetIds = issue.commetIds.filter((issueCommentId) => issueCommentId !== commentId);

  const idx = findIndexById(comments, commentId);

  if (idx === -1) {
    return false;
  }

  comments.splice(idx, 1);

  return true;
};
