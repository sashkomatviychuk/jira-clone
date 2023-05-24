import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px 0;
`;

export const Row = styled.div`
  margin-bottom: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.light};
  letter-spacing: 0.5px;
`;
