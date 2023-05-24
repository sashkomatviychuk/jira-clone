import styled from 'styled-components';

export const ProjectInfoStyled = styled.div`
  display: flex;
  padding: 0 0 24px 4px;
`;

export const AvatarContainer = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

export const Details = styled.div`
  font-size: 13px;
  letter-spacing: 0.8px;
  width: 136px;
`;

export const Name = styled.div`
  padding: 8px 0 4px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.dark};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Category = styled.div`
  padding-top: 2px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.medium};
`;
