import classNames from 'classnames';
import { AvatarBorder } from 'components/common/Avatar';
import { Row } from 'components/common/Row';
import { Button } from 'components/controls/Button';
import Searchbar from 'components/controls/Searchbar';
import { useGetProjectQuery } from 'features/project/api';
import { FilterContext } from 'features/project/contexts/Filters.context';
import get from 'lodash/get';
import xor from 'lodash/xor';
import { FC, memo, useCallback, useContext, useEffect, useState } from 'react';
import { User } from 'types/project';

import { ClearFilters, User as UserStyled, UserFilter as UserFilterStyled } from './Filter.styled';

type UserFilterProps = {
  value?: number[];
  onChange: (userIds: number[]) => void;
};

const UserFilter: FC<UserFilterProps> = memo(({ value, onChange }) => {
  const [userIds, setUserIds] = useState(value || []);

  const { data: project } = useGetProjectQuery();
  const users = get(project, 'users', []) as User[];

  useEffect(() => {
    value && setUserIds(value);
  }, [value]);

  return (
    <UserFilterStyled>
      {users.map((user) => (
        <AvatarBorder isActive={userIds.includes(user.id)} key={user.id}>
          <UserStyled
            name={user.name}
            onClick={() => {
              const newUserIds = xor(userIds, [user.id]);

              setUserIds(newUserIds);
              onChange(newUserIds);
            }}
            size={26}
            url={user.avatarUrl}
          />
        </AvatarBorder>
      ))}
    </UserFilterStyled>
  );
});

type BooleanFilterProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

const UserIssuesFilter: FC<BooleanFilterProps> = memo(({ value, onChange }) => {
  return (
    <Button className={classNames('link', { active: value })} onClick={() => onChange(!value)}>
      Only My Issues
    </Button>
  );
});

const LastUpdatedFilter: FC<BooleanFilterProps> = memo(({ value, onChange }) => {
  return (
    <Button className={classNames('link', { active: value })} onClick={() => onChange(!value)}>
      Recently Updated
    </Button>
  );
});

// todo: refactor components

const Filters: FC = () => {
  const {
    hasFilter,
    innerFilter,
    onSearchChange,
    onUsersChange,
    onShowUserIssueChange,
    onLastUpdatedChanged,
    resetFilter,
  } = useContext(FilterContext);

  const handleUserChange = useCallback((userIds: number[]) => {
    onUsersChange(userIds);
  }, []);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.currentTarget.value),
    []
  );

  const handleShowUserIssues = useCallback((value: boolean) => {
    onShowUserIssueChange(value);
  }, []);

  const handleLastUpdated = useCallback((value: boolean) => {
    onLastUpdatedChanged(value);
  }, []);

  return (
    <Row>
      <Searchbar onChange={handleSearch} value={innerFilter.search} />
      <UserFilter onChange={handleUserChange} value={innerFilter.userIds} />
      <UserIssuesFilter onChange={handleShowUserIssues} value={innerFilter.showUserIssues} />
      <LastUpdatedFilter onChange={handleLastUpdated} value={innerFilter.lastUpdated} />
      {hasFilter && <ClearFilters onClick={resetFilter}>Clear all</ClearFilters>}
    </Row>
  );
};

export default Filters;
