import { FC } from 'react';
import { IssueTypeIconProps } from './interfaces';
import Icon from 'components/common/Icon';
import { typeIcon, typeColors } from 'app/issue/issue.service';

const IssueTypeIcon: FC<IssueTypeIconProps> = ({ type, ...props }) => {
  const iconName = typeIcon[type];
  const color = typeColors[type];

  return <Icon name={iconName} color={color} {...props} />;
};

export default IssueTypeIcon;
