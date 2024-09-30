import intersection from 'lodash/intersection';
import { Comment } from 'types/comment';
import { Issue } from 'types/issue';
import { Project, User } from 'types/project';

import { commentsDb, issuesDb, nextId, projectEntry, usersDb } from './data';
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
  const issues = findByIds(issuesDb, projectEntry.issueIds).map((issue) => ({
    ...issue,
    assignees: findByIds(usersDb, issue.assigneeIds),
  }));

  return {
    ...projectEntry,
    issues,
    users: findByIds(usersDb, projectEntry.userIds),
  };
};

export const getIssues = ({ query, assigneeIds }: IssuesFilter): Issue[] => {
  let issues = issuesDb;

  if (query) {
    const re = new RegExp(query, 'gi');
    issues = issues.filter((issue) => re.test(issue.title));
  }

  if (assigneeIds?.length) {
    issues = issues.filter((issue) => intersection(issue.assigneeIds, assigneeIds).length > 0);
  }

  return issues.map((issue) => {
    const comments = findByIds(commentsDb, issue.commetIds).map((comment) => ({
      ...comment,
      user: findById(usersDb, comment.userId) as User,
    }));

    return {
      ...issue,
      comments,
      assignees: findByIds(usersDb, issue.assigneeIds),
      reporter: issue.reporterId ? (findById(usersDb, issue.reporterId) as User) : null,
    };
  });
};

export const getIssue = (id: number): Optional<Issue> => {
  const issue = findById(issuesDb, id);

  if (!issue) {
    return;
  }

  const comments = findByIds(commentsDb, issue.commetIds).map((comment) => ({
    ...comment,
    user: findById(usersDb, comment.userId) as User,
  }));

  return {
    ...issue,
    comments,
    assignees: findByIds(usersDb, issue.assigneeIds),
    reporter: issue.reporterId ? (findById(usersDb, issue.reporterId) as User) : null,
  };
};

export const createIssue = (payload: CreateIssuePayload): Issue => {
  const lastIssue = issuesDb
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

  issuesDb.push(issue);

  return {
    ...issue,
    assignees: findByIds(usersDb, issue.assigneeIds),
    reporter: issue.reporterId ? (findById(usersDb, issue.reporterId) as User) : null,
    comments: [],
  };
};

export const updateIssue = (id: number, payload: UpdateIssuePayload): Optional<Issue> => {
  const issue = findById(issuesDb, id);

  if (!issue) {
    return;
  }

  Object.assign(issue, { ...payload, updatedAt: new Date() });

  const comments = findByIds(commentsDb, issue.commetIds).map((comment) => ({
    ...comment,
    user: findById(usersDb, comment.userId) as User,
  }));

  return {
    ...issue,
    comments,
    assignees: findByIds(usersDb, issue.assigneeIds),
    reporter: issue.reporterId ? (findById(usersDb, issue.reporterId) as User) : null,
  };
};

export const deleteIssue = (id: number): boolean => {
  const idx = findIndexById(issuesDb, id);

  if (idx < 0) {
    return false;
  }

  issuesDb.splice(idx, 1);

  return true;
};

export const createIssueComment = (payload: CreateCommentPayload): Optional<Comment> => {
  const issue = findById(issuesDb, payload.issueId);

  if (!issue) {
    return;
  }

  const comment: CommentModel = {
    id: nextId(),
    userId: payload.userId,
    body: payload.body,
    createdAt: new Date(),
  };

  commentsDb.push(comment);

  issue.commetIds.push(comment.id);

  return { ...comment, user: findById(usersDb, comment.userId) as User };
};

export const deleteIssueComment = ({ issueId, commentId }: DeleteCommentPayload): boolean => {
  const issue = findById(issuesDb, issueId);

  if (!issue) {
    return false;
  }

  issue.commetIds = issue.commetIds.filter((issueCommentId) => issueCommentId !== commentId);

  const idx = findIndexById(commentsDb, commentId);

  if (idx < 0) {
    return false;
  }

  commentsDb.splice(idx, 1);

  return true;
};
