import { memo } from 'react';
import styled from 'styled-components';

export const RowStyled = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 6px;
  }
`;

export const Row = memo(RowStyled);
