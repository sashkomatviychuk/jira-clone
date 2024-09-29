import { IconName } from 'components/common/Icon';
import { IssuePriority, IssueStatus, IssueType } from 'types/issue';

export const BOARD_COLUMNS: Record<IssueStatus, string> = {
  [IssueStatus.backlog]: 'Backlog',
  [IssueStatus.todo]: 'Selected for development',
  [IssueStatus.inprogress]: 'In progress',
  [IssueStatus.done]: 'Done',
};

export const ISSUE_TYPE_ICONS: Record<IssueType, IconName> = {
  bug: 'bug',
  task: 'task',
  story: 'story',
};

// todo: colors from theme
export const ISSUE_TYPE_COLORS: Record<IssueType, string> = {
  bug: '#e44d42',
  story: '#65ba43',
  task: '#4fade6',
};

export const ISSUE_PRIORITY_ICONS: Record<IssuePriority, IconName> = {
  highest: 'arrow-up',
  high: 'arrow-up',
  low: 'arrow-down',
  lowest: 'arrow-down',
};

export const ISSUE_PRIORITY_COLORS: Record<IssuePriority, string> = {
  highest: '#CD1317',
  high: '#E97F33',
  low: '#2D8738',
  lowest: '#57A55A',
};

export const ISSUE_STATUS_COLORS: Record<IssueStatus, string> = {
  todo: '#5E6C84',
  backlog: '#5E6C84',
  inprogress: '#fff',
  done: '#fff',
};

export const ISSUE_STATUS_BG_COLORS: Record<IssueStatus, string> = {
  todo: '#dfe1e6',
  backlog: '#dfe1e6',
  inprogress: '#0052cc',
  done: '#0B875B',
};

export const ISSUE_TYPES = [
  {
    value: IssueType.bug,
    label: 'Bug',
    color: ISSUE_TYPE_COLORS.bug,
    icon: ISSUE_TYPE_ICONS.bug,
  },
  {
    value: IssueType.story,
    label: 'Story',
    color: ISSUE_TYPE_COLORS.story,
    icon: ISSUE_TYPE_ICONS.story,
  },
  {
    value: IssueType.task,
    label: 'Task',
    color: ISSUE_TYPE_COLORS.task,
    icon: ISSUE_TYPE_ICONS.task,
  },
];

export const ISSUE_PRIORITIES = [
  {
    value: IssuePriority.high,
    label: 'High',
    color: ISSUE_PRIORITY_COLORS.high,
    icon: ISSUE_PRIORITY_ICONS.high,
  },
  {
    value: IssuePriority.highest,
    label: 'Highest',
    color: ISSUE_PRIORITY_COLORS.highest,
    icon: ISSUE_PRIORITY_ICONS.highest,
  },
  {
    value: IssuePriority.low,
    label: 'Low',
    color: ISSUE_PRIORITY_COLORS.low,
    icon: ISSUE_PRIORITY_ICONS.low,
  },
  {
    value: IssuePriority.lowest,
    label: 'Lowest',
    color: ISSUE_PRIORITY_COLORS.lowest,
    icon: ISSUE_PRIORITY_ICONS.lowest,
  },
];

export const ISSUE_STATUSES = [
  {
    value: IssueStatus.backlog,
    label: BOARD_COLUMNS.backlog,
    color: ISSUE_STATUS_COLORS.backlog,
  },
  {
    value: IssueStatus.todo,
    label: BOARD_COLUMNS.todo,
    color: ISSUE_STATUS_COLORS.todo,
  },
  {
    value: IssueStatus.inprogress,
    label: BOARD_COLUMNS.inprogress,
    color: ISSUE_STATUS_COLORS.inprogress,
  },
  {
    value: IssueStatus.done,
    label: BOARD_COLUMNS.done,
    color: ISSUE_STATUS_COLORS.done,
  },
];
