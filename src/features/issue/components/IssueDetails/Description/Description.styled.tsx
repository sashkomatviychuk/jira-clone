import { Row as DefaultRow } from 'components/common/Row';
import { Label as DefaultLabel } from 'components/controls/Form';
import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 12px;
`;

export const Label = styled(DefaultLabel)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.dark};
`;

export const Row = styled(DefaultRow)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.dark};
`;

export const Preview = styled.div`
  margin-top: 12px;
  font-size: 14px;
  cursor: text;

  & p {
    margin: 0;
  }
`;
