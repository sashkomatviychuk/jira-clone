import Icon from 'components/common/Icon';
import { getPriorityIconProps } from 'features/issue/issue.utils';
import { FC } from 'react';
import { IssuePriority } from 'types/issue';

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
