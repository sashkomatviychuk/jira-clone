import { Input as BaseInput } from 'components/controls/Input';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 12px;
  width: 550px;

  & .project-category {
    background: ${({ theme }) => theme.colors.secondary.main};
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;

export const Input = styled(BaseInput)`
  width: 100%;
`;
