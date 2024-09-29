import Icon from 'components/common/Icon';
import { Container, withModal } from 'components/common/Modal';
import { Row } from 'components/common/Row';
import { Button } from 'components/controls/Button';
import { FC } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import styled from 'styled-components';

import SearchedIssues from '../../issue/components/IssuesSearch/SearchedIssues';
import SearchForm from '../../issue/components/IssuesSearch/SearchForm';
import { FiltersProvider } from '../../project/contexts/Filters.context';

const CloseButton = styled(Button)`
  border-radius: 3px;
  width: 36px;
  height: 36px;
  box-shadow: ${({ theme }) => theme.colors.text.light} 0px 0px 0px 2px;
  background: ${({ theme }) => theme.colors.white};
  padding: 0;
  justify-content: center;
  transition: all 0.1s;

  & > .icon {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    transform: scale(1.15);
  }
`;

const HeadRow = styled(Row)`
  justify-content: space-between;
`;

const SearchContainer = styled(Container)`
  top: 0;
  left: 0;
  bottom: 0;
  width: 400px;
  border-radius: 0;
  transform: none;

  & .search-container {
    width: 100%;
    height: 38px;
    font-size: 18px;

    & .icon {
      top: 0px;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.text.light};
    }

    & .search-input {
      border: 0;
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary.dark};
      border-radius: 0;
      background: ${({ theme }) => theme.colors.white};
      font-size: 18px;
      padding-left: 36px;
      color: ${({ theme }) => theme.colors.text.main};

      &:focus {
        box-shadow: none;
      }
    }
  }
`;

// todo: create folder for sub-components

const SearchIssuesPage: FC = withModal('search-issues', ({ close }) => {
  return (
    <ClickAwayListener onClickAway={close}>
      <SearchContainer>
        <HeadRow>
          <h2>Search issues</h2>
          <CloseButton onClick={close}>
            <Icon name="close" size={20} />
          </CloseButton>
        </HeadRow>
        <FiltersProvider>
          <SearchForm />
          <SearchedIssues />
        </FiltersProvider>
      </SearchContainer>
    </ClickAwayListener>
  );
});

export default SearchIssuesPage;
