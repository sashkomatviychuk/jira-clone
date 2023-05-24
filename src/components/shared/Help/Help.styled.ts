import styled from 'styled-components';

export const HelpContentStyled = styled.div`
  position: absolute;
  z-index: 101;
  bottom: 0;
  left: 70px;
  width: 300px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text.medium};
  box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px, rgb(9 30 66 / 31%) 0px 0px;
  border-radius: 3px;
  padding: 16px;
  font-size: 12px;

  & .img {
    width: 100%;
    padding: 12px 36px;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  text-align: left;
  letter-spacing: 0.5px;
  line-height: 1.3;

  &.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:last-of-type {
    margin-bottom: 2px;
  }
`;

export const ContactEmail = styled.a`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
