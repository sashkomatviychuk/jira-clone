import styled from 'styled-components';

export const Divider = styled.div`
  margin-top: 16px;
  padding-top: 17px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export default styled.div`
  position: fixed;
  overflow: hidden auto;
  z-index: 99;
  top: 0;
  left: 64px;
  width: 230px;
  height: 100vh;
  padding: 24px 16px;
  background: ${({ theme }) => theme.colors.secondary.main};
  border-right: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;
