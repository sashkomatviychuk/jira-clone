import { FC, memo, useCallback, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import xor from 'lodash/xor';
import get from 'lodash/get';

import { Row } from 'components/common/Row';
import { Button } from 'components/controls/Button';
import Searchbar from 'components/controls/Searchbar';
import { User } from 'app/project/project.interfaces';
import { FilterContext } from 'features/project/contexts/Filters.context';
import { AvatarBorder } from 'components/common/Avatar';
import { ClearFilters, User as UserStyled, UserFilter as UserFilterStyled } from './Filter.styled';
import { useGetProjectQuery } from 'features/project/api/project.api';

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
        <AvatarBorder key={user.id} isActive={userIds.includes(user.id)}>
          <UserStyled
            name={user.name}
            size={26}
            url={user.avatarUrl}
            onClick={() => {
              const newUserIds = xor(userIds, [user.id]);

              setUserIds(newUserIds);
              onChange(newUserIds);
            }}
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
      <Searchbar value={innerFilter.search} onChange={handleSearch} />
      <UserFilter value={innerFilter.userIds} onChange={handleUserChange} />
      <UserIssuesFilter value={innerFilter.showUserIssues} onChange={handleShowUserIssues} />
      <LastUpdatedFilter value={innerFilter.lastUpdated} onChange={handleLastUpdated} />
      {hasFilter && <ClearFilters onClick={resetFilter}>Clear all</ClearFilters>}
    </Row>
  );
};

export default Filters;
