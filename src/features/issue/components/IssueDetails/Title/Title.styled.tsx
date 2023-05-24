import { TextArea } from 'components/controls/Input';
import styled from 'styled-components';

export default styled(TextArea)`
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.white};
  font-size: 28px;
  width: 100%;
  padding: 10px 0 10px 10px;
  resize: none;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary.main};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
