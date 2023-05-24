import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Avatar from 'components/common/Avatar';

export const Lists = styled.div`
  display: flex;
  margin: 30px -5px 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  width: 25%;
  min-height: 400px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.secondary.main};
`;

export const Title = styled.div`
  padding: 16px 10px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.light};
  letter-spacing: 0.3px;
`;

export const IssuesContainer = styled.div`
  padding: 10px;
  font-size: 13px;
`;

export const Issue = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: ${({ theme }) => theme.colors.text.light} 0px 1px 2px 0px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text.dark};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const Name = styled.div`
  line-height: 1.4;
  margin-bottom: 8px;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Assignees = styled.div`
  display: flex;
  margin-left: 2px;
`;

export const Assignee = styled(Avatar)`
  box-shadow: 0 0 0 2px #fff;
`;
