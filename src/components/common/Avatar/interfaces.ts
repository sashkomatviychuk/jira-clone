export type AvatarProps = {
  name: string;
  size: number;
  url?: string;
  onClick?: () => void;
};

export type ImageProps = {
  size: number;
  url: string;
};

export type LetterProps = {
  size: number;
  name: string;
};

export type AvatarBorderProps = {
  isActive: boolean;
};
