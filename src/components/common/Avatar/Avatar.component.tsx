import { FC } from 'react';

import { Image, Letter } from './Avatar.styled';
import { AvatarProps } from './interfaces';

const Avatar: FC<AvatarProps> = ({ url, ...props }) => {
  if (url) {
    return <Image className="avatar" {...props} url={url} />;
  }

  return (
    <Letter className="avatar" {...props}>
      <span>{props.name.charAt(0)}</span>
    </Letter>
  );
};

export default Avatar;
