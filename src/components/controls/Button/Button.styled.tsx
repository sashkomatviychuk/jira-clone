import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  outline: none;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.text.main};
  height: 32px;
  border: 0;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 13px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }

  &.primary {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.medium};
    }
  }
  &.link {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text.medium};

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }
  }
  &.icon {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};

    &.round {
      border-radius: 50%;
      width: 32px;
      height: 32px;
      padding: 8px 0;
    }

    & i {
      font-size: 20px;
      width: 100%;
    }

    &:hover {
      background-color: transparent;
    }
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary.aqua} !important;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.primary.aqua};
    pointer-events: none;
  }

  & > span {
    margin-left: 4px;
  }
`;
