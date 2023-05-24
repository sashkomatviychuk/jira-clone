import styled from 'styled-components';

export const Row = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;

  &:first-of-type {
    margin-top: 0px;
  }

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const Label = styled.label`
  display: inline-block;
  padding-bottom: 6px;
  color: ${({ theme }) => theme.colors.text.main};
  font-size: 12px;
  font-weight: 500;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 11px;
  padding-top: 6px;
  letter-spacing: 0.5px;
  height: 18px;
  overflow: hidden;
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.colors.danger.main};
  font-size: 11px;
  padding-top: 6px;
  letter-spacing: 0.5px;
  height: 18px;
  overflow: hidden;
`;
