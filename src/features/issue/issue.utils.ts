import {
  ISSUE_PRIORITY_COLORS,
  ISSUE_PRIORITY_ICONS,
  ISSUE_TYPE_COLORS,
  ISSUE_TYPE_ICONS,
} from 'features/issue/issue.constants';
import { DropResult } from 'react-beautiful-dnd';
import { Issue, IssuePriority, IssueStatus, IssueType } from 'types/issue';

export const getTypeIconProps = (type: IssueType) => ({
  name: ISSUE_TYPE_ICONS[type],
  color: ISSUE_TYPE_COLORS[type],
});

export const getPriorityIconProps = (priority: IssuePriority) => ({
  name: ISSUE_PRIORITY_ICONS[priority],
  color: ISSUE_PRIORITY_COLORS[priority],
});

export const isValidEstimate = (value: string): boolean => !value || !!parseInt(value);

export const filterIssuesByStatus = (issues: Issue[], status: IssueStatus): Issue[] => {
  return issues.filter((issue) => issue.status === status);
};

export const sortIssuesByPosition = (issues: Issue[]): Issue[] =>
  issues.sort((a, b) => a.position - b.position);

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
