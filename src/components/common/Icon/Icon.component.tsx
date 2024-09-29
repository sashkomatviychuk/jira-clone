import { FC } from 'react';

import { FONT_ICON_CODES } from './constants';
import { Icon as StyledIcon } from './Icon.styled';
import { IconProps } from './interfaces';

const Icon: FC<IconProps> = ({ name, size = 16, top = 0, left = 0, ...props }) => {
  const code = FONT_ICON_CODES[name];

  return <StyledIcon className="icon" code={code} left={left} size={size} top={top} {...props} />;
};

export default Icon;
