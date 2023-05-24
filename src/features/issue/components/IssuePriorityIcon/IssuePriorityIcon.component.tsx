import { FC } from 'react';
import { IssuePriorityIconProps } from './interfaces';
import Icon from 'components/common/Icon';
import { priorityIcon, priorityColors } from 'app/issue/issue.service';

const IssuePriorityIcon: FC<IssuePriorityIconProps> = ({ type, ...props }) => {
  const iconName = priorityIcon[type];
  const color = priorityColors[type];

  return <Icon name={iconName} color={color} {...props} />;
};

export default IssuePriorityIcon;
