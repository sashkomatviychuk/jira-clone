import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

export const Link = styled(ReactLink)`
  display: inline-flex;
  align-items: center;
  height: 32px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.dark};
  font-size: 14px;
  text-decoration: none;
  border-radius: 4px;
  padding: 4px 10px;
  letter-spacing: 0.3px;

  &.active {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.primary.medium};
  }

  &.primary {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.medium};
    }
  }

  &.secondary {
    background-color: ${({ theme }) => theme.colors.secondary.main};
    color: ${({ theme }) => theme.colors.text.main};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }

  & > span {
    margin-left: 6px;
  }
`;
