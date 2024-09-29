import Icon from 'components/common/Icon';
import { getTypeIconProps } from 'features/issue/issue.utils';
import { FC } from 'react';

import { IssueTypeIconProps } from './interfaces';

const IssueTypeIcon: FC<IssueTypeIconProps> = ({ type, ...props }) => {
  return <Icon {...getTypeIconProps(type)} {...props} />;
};

export default IssueTypeIcon;
