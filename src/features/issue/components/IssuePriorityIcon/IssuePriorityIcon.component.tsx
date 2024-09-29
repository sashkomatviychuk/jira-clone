import { FC } from 'react';
import Icon from 'components/common/Icon';
import { IssuePriority } from 'types/issue';
import { getPriorityIconProps } from 'features/issue/issue.utils';

interface IssuePriorityIconProps {
  type: IssuePriority;
  size?: number;
  top?: number;
  left?: number;
}

const IssuePriorityIcon: FC<IssuePriorityIconProps> = ({ type, ...props }) => {
  return <Icon {...getPriorityIconProps(type)} {...props} />;
};

export default IssuePriorityIcon;
