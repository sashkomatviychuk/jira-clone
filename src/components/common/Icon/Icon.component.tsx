import { FC } from 'react';
import { Icon as StyledIcon } from './Icon.styled';
import { IconProps } from './interfaces';
import { FONT_ICON_CODES } from './constants';

const Icon: FC<IconProps> = ({ name, size = 16, top = 0, left = 0, ...props }) => {
  const code = FONT_ICON_CODES[name];

  return <StyledIcon className="icon" code={code} size={size} top={top} left={left} {...props} />;
};

export default Icon;
