import styled from 'styled-components';

export const Divider = styled.span`
  margin: 0 6px;
`;

export const Container = styled.div`
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.main};
  letter-spacing: 0.5px;
`;
