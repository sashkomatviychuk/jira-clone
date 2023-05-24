import styled from 'styled-components';

export const Card = styled.div`
  display: block;
  padding: 12px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 10px 0px;
  background: ${({ theme }) => theme.colors.white};
`;
