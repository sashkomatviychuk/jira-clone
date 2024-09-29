import { Card } from 'components/common/Card';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
  background: rgba(9, 30, 66, 0.54);
`;

export const Container = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
`;
