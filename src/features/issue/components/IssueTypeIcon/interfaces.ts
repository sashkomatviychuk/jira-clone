import { IssueType } from 'app/issue/issue.interface';

export interface IssueTypeIconProps {
  type: IssueType;
  size?: number;
  top?: number;
  left?: number;
}
