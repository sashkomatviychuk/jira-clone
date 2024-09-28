/* eslint-disable no-console */
import { IOption } from 'components/controls/Select';
import { Issue, IssuePriority, IssueStatus, IssueType } from 'types/issue';
import capitalize from 'lodash/capitalize';
import get from 'lodash/get';
import { IconName } from 'components/common/Icon';
import { DropResult } from 'react-beautiful-dnd';

export const priorityIcon: Record<IssuePriority, IconName> = {
  highest: 'arrow-up',
  high: 'arrow-up',
  low: 'arrow-down',
  lowest: 'arrow-down',
};

export const priorityColors: Record<IssuePriority, string> = {
  highest: '#CD1317',
  high: '#E97F33',
  low: '#2D8738',
  lowest: '#57A55A',
};

export const typeIcon: Record<IssueType, IconName> = {
  bug: 'bug',
  task: 'task',
  story: 'story',
};

export const typeColors: Record<IssueType, string> = {
  bug: '#e44d42',
  story: '#65ba43',
  task: '#4fade6',
};

export const statusColors: Record<IssueStatus, string> = {
  todo: '#5E6C84',
  backlog: '#5E6C84',
  inprogress: '#fff',
  done: '#fff',
};

export const statusBgColors: Record<IssueStatus, string> = {
  todo: '#dfe1e6',
  backlog: '#dfe1e6',
  inprogress: '#0052cc',
  done: '#0B875B',
};

export const getPriorityOptions = (): IOption[] => {
  return Object.keys(IssuePriority).map((priority) => ({
    value: priority,
    label: capitalize(priority),
    color: get(priorityColors, priority),
    icon: get(priorityIcon, priority),
  }));
};

export const getTypeOptions = (): IOption[] => {
  return Object.keys(IssueType).map((type) => ({
    value: type,
    label: capitalize(type),
    color: get(typeColors, type),
    icon: get(typeIcon, type),
  }));
};

export const getStatusOptions = (): IOption[] => {
  return Object.keys(IssueStatus).map((status) => ({
    value: status,
    label: columnNames[status as IssueStatus],
    color: statusColors[status as IssueStatus],
  }));
};

export const filterIssuesByStatus = (issues: Issue[], status: IssueStatus): Issue[] => {
  return issues.filter((issue) => issue.status === status);
};

export const sortIssuesByPosition = (issues: Issue[]): Issue[] =>
  issues.sort((a, b) => a.position - b.position);

export const BOARD_COLUMNS: IssueStatus[] = [
  IssueStatus.backlog,
  IssueStatus.todo,
  IssueStatus.inprogress,
  IssueStatus.done,
];

export const columnNames: Record<IssueStatus, string> = {
  backlog: 'Backlog',
  todo: 'Selected for development',
  inprogress: 'In progress',
  done: 'Done',
};

export const calculateIssuePosition = (issues: Issue[], { destination }: DropResult): number => {
  const status = destination!.droppableId as IssueStatus;
  const index = destination!.index;
  const issuesWithStatus = sortIssuesByPosition(filterIssuesByStatus(issues, status));
  const prev = issuesWithStatus[index - 1];
  const next = issuesWithStatus[index];

  if (!prev && !next) {
    return 1;
  }

  if (!prev) {
    return next.position - 1;
  }

  if (!next) {
    return prev.position + 1;
  }

  return prev.position + (next.position - prev.position) / 2;
};

export const isPositionChanged = ({ destination, source }: DropResult): boolean => {
  if (!destination) {
    return false;
  }

  const isSameList = destination.droppableId === source.droppableId;
  const isSamePosition = destination.index === source.index;

  return !isSameList || !isSamePosition;
};

// todo: utils

export const isValidEstimate = (value: string): boolean => !value || !!parseInt(value);
