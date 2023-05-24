import styled from 'styled-components';
import { StyledIconProps } from 'components/common/Icon/interfaces';

export const Icon = styled.i<StyledIconProps>`
  display: inline-block;
  font-size: ${(props) => `${props.size}px`};
  ${(props) =>
    props.left || props.top ? `transform: translate(${props.left}px, ${props.top}px);` : ''}
  ${({ color }) => (color ? `color: ${color};` : '')}
  line-height: 1;

  &:before {
    content: '${(props) => props.code}';
    font-family: 'jira' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
