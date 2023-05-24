import styled from 'styled-components';
import { ImageProps, LetterProps, AvatarBorderProps } from './interfaces';

export const Image = styled.div<ImageProps>`
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-image: url('${({ url }) => url}');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.gray[100]};
`;

export const Letter = styled.div<LetterProps>`
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background: ${(props) => props.color};
  font-size: ${(props) => Math.round(props.size / 1.7)}px;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const AvatarBorder = styled.div<AvatarBorderProps>`
  display: inline-flex;
  margin-left: -2px;
  border-radius: 50%;
  transition: transform 0.1s;
  cursor: pointer;
  user-select: none;
  ${({ isActive, theme }) => isActive && `box-shadow: 0 0 0 4px ${theme.colors.primary.medium};`}

  &:hover {
    transform: scale(1.2);
  }
`;
