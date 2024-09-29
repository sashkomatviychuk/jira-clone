import Avatar from 'components/common/Avatar';
import styled from 'styled-components';

export const UserFilter = styled.div`
  display: inline-flex;
  margin-left: 12px;
  margin-right: 12px;
`;

export const User = styled(Avatar)`
  box-shadow: 0 0 0 2px #fff;
`;

export const ClearFilters = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: 2px;
  padding-left: 14px;
  height: 32px;
  border-left: 1px solid ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.text.main};
  font-size: 13px;
  letter-spacing: 0.8px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text.medium};
  }
`;
