import { IssuePriority } from 'app/issue/issue.interface';

export interface IssuePriorityIconProps {
  type: IssuePriority;
  size?: number;
  top?: number;
  left?: number;
}
