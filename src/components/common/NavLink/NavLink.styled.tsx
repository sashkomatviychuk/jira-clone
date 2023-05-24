import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

export const NavLinkStyled = styled(ReactLink)`
  position: relative;
  display: flex;
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.dark};
  font-size: 14px;
  text-decoration: none;
  border-radius: 4px;
  padding: 8px 12px;
  letter-spacing: 0.3px;
  line-height: 1.3;

  &:after: {
    content: '';
    position: absolute;
    left: 20px;
  }

  &.disabled {
    cursor: not-allowed;

    &:hover {
      &:after {
        content: 'Not implemented';
        position: absolute;
        left: 40px;
        top: 9px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text.medium};
        font-size: 13px;
        text-transform: uppercase;
      }

      & > span {
        visibility: hidden;
      }
    }
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.primary.medium};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }

  & > span {
    margin-left: 12px;
  }
`;
