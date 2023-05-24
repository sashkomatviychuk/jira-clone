import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const EmptyIssuesList = styled.div`
  width: 100%;
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.8px;
  color: ${({ theme }) => theme.colors.text.main};
  padding-top: 32px;
`;

export const Container = styled.div`
  margin: 20px 0;
`;

export const Issue = styled(Link)`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  text-decoration: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.main};
  border-radius: 3px;

  & .icon {
    margin-right: 8px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.secondary.main};
  }

  &:not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Type = styled.span`
  color: ${({ theme }) => theme.colors.text.light};
  text-transform: uppercase;
  padding-top: 4px;
  font-size: 12px;
`;
