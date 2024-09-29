import { Input } from 'components/controls/Input';
import styled from 'styled-components';

export const SearchInput = styled(Input)`
  width: 100%;
  height: 100%;
  padding-left: 28px;
  padding-right: 4px;
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
  height: 32px;

  & .icon {
    position: absolute;
  }
`;
