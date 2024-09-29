import TextareaAutoSize from 'react-textarea-autosize';
import styled from 'styled-components';

export const TextArea = styled(TextareaAutoSize)`
  outline: none;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 4px;
  font-size: 13px;
  padding: 6px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.light};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.colors.primary.light} 0px 0px 0px 1px;
  }

  &.error {
    border: 1px solid ${({ theme }) => theme.colors.danger.main};

    &:focus {
      box-shadow: none;
    }
  }
`;

export const Input = styled.input`
  outline: none;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 4px;
  font-size: 13px;
  padding: 6px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.light};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.colors.primary.light} 0px 0px 0px 1px;
  }

  &.error {
    border: 1px solid ${({ theme }) => theme.colors.danger.main};

    &:focus {
      box-shadow: none;
    }
  }
`;
