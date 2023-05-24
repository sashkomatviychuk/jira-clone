import { FONT_ICON_CODES } from './constants';

export type IconName = keyof typeof FONT_ICON_CODES;

export type StyledIconProps = {
  code: string;
  size: number;
  left: number;
  top: number;
  color?: string;
};

export type IconProps = {
  name: IconName;
  size?: number;
  left?: number;
  top?: number;
  color?: string;
};
