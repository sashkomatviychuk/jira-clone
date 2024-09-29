import { Label as DefaultLabel } from 'components/controls/Form';
import styled from 'styled-components';

export const IssueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Left = styled.div`
  width: 65%;
  padding-right: 30px;
`;

export const Right = styled.div`
  width: 35%;
`;

export const Space = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled(DefaultLabel)`
  display: block;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.main};
  text-transform: uppercase;
`;

export const FieldWrapper = styled.div`
  margin: 24px 0;

  &:first-of-type {
    margin-top: 0;
  }
`;
