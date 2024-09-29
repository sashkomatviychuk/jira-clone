import { Button } from 'components/controls/Button';
import styled from 'styled-components';

export const NavbarLeftStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 64px;
  height: 100vh;
  padding: 24px 16px;
  text-align: center;
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.white};
`;

export const ActionButtons = styled.div`
  margin: 32px 0;

  & button:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 24px;
  left: 14px;

  & ${Button} {
    & i {
      font-size: 24px;
    }
  }
`;
