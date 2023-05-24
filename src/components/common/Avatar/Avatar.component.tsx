import { FC } from 'react';
import { AvatarProps } from './interfaces';
import { Letter, Image } from './Avatar.styled';

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
