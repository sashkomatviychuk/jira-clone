import { IssuePriority, IssueType } from 'types/issue';

import { CommentModel, IssueModel, ProjectModel, UserModel } from './models';

export const createGenerator = () => {
  let currentId = 1;
  return () => currentId++;
};

export const nextId = createGenerator();

export const users: UserModel[] = [
  {
    id: 1,
    name: 'John Done',
    avatarUrl: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
  },
  {
    id: 2,
    name: 'Jane Cruz',
    avatarUrl: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
  },
  {
    id: 3,
    name: 'Oscar',
    avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
  },
];

export const comments: CommentModel[] = [
  {
    id: 1,
    body: 'First comment. Great app!',
    userId: 1,
    createdAt: new Date(),
  },
];

export const issues: IssueModel[] = [
  {
    id: 3746,
    title: 'You can use rich text with images in issue descriptions',
    description: '<p>You can use rich text with images in issue descriptions</p>',
    commetIds: [1],
    assigneeIds: [1],
    reporterId: null,
    estimate: 3,
    timeSpent: 1,
    priority: IssuePriority.high,
    status: 'todo',
    type: IssueType.task,
    createdAt: new Date('2023-02-26'),
    updatedAt: new Date('2023-02-26'),
    position: 1,
  },
  {
    id: 4134,
    title: 'Rollback user points if fail to redeem reward',
    description: '<p>You can use rich text with images in issue descriptions</p>',
    commetIds: [],
    assigneeIds: [2],
    reporterId: 3,
    estimate: 3,
    timeSpent: 1,
    priority: IssuePriority.high,
    status: 'todo',
    type: IssueType.story,
    createdAt: new Date('2023-02-24'),
    updatedAt: new Date('2023-02-26'),
    position: 2,
  },
  {
    id: 1781,
    title: 'Create shopping list filter component',
    description: '<p>You can use rich text with images in issue descriptions</p>',
    commetIds: [],
    assigneeIds: [3],
    reporterId: null,
    estimate: 8,
    timeSpent: 0,
    priority: IssuePriority.low,
    status: 'inprogress',
    type: IssueType.story,
    createdAt: new Date('2023-02-25'),
    updatedAt: new Date('2023-02-27'),
    position: 1,
  },
  {
    id: 1783,
    title: 'Setup a new project structure and environment',
    description: '<p>You can use rich text with images in issue descriptions</p>',
    commetIds: [],
    assigneeIds: [1, 2],
    reporterId: null,
    estimate: 8,
    timeSpent: 0,
    priority: IssuePriority.highest,
    status: 'done',
    type: IssueType.task,
    createdAt: new Date('2023-02-20'),
    updatedAt: new Date('2023-02-23'),
    position: 1,
  },
  {
    id: 376,
    title: 'This is a test backlog bug',
    description: '<p>You can use rich text with images in issue descriptions</p>',
    commetIds: [],
    assigneeIds: [],
    reporterId: null,
    estimate: 8,
    timeSpent: 0,
    priority: IssuePriority.lowest,
    status: 'backlog',
    type: IssueType.bug,
    createdAt: new Date(),
    updatedAt: new Date(),
    position: 1,
  },
  {
    id: 455,
    title: 'Setup a new environment for running e2e tests',
    description: '<p>You can use rich text with images in issue descriptions</p>',
    commetIds: [],
    assigneeIds: [3],
    reporterId: 2,
    estimate: 8,
    timeSpent: 0,
    priority: IssuePriority.high,
    status: 'backlog',
    type: IssueType.task,
    createdAt: new Date(),
    updatedAt: new Date(),
    position: 2,
  },
];

export const project: ProjectModel = {
  id: nextId(),
  title: 'singularity 1.0',
  description: 'Plan, track, and manage your agile and software development projects',
  category: 'software',
  url: 'https://www.atlassian.com/software/jira',
  issueIds: [],
  userIds: [1, 2, 3],
  createdAt: new Date(),
};
