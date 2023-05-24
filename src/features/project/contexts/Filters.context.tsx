import { FC, createContext, PropsWithChildren, useState } from 'react';
import isEqual from 'lodash/isEqual';
import pickBy from 'lodash/pickBy';
import isEmpty from 'lodash/isEmpty';

import { ProjectFilter } from 'app/project/project.interfaces';
import { useDebounce } from 'shared/hooks/common';

type FilterContextProps = {
  hasFilter: boolean;
  filter: ProjectFilter;
  innerFilter: ProjectFilter;
  onSearchChange: (search: string) => void;
  onUsersChange: (userIds: number[]) => void;
  onShowUserIssueChange: (showUserIssues: boolean) => void;
  onLastUpdatedChanged: (lastUpdated: boolean) => void;
  resetFilter: () => void;
};

export const defaultFilter: ProjectFilter = {
  search: '',
  userIds: [],
  showUserIssues: false,
  lastUpdated: false,
};

export const FilterContext = createContext<FilterContextProps>(undefined!);

export const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [innerFilter, setFilter] = useState<ProjectFilter>(defaultFilter);
  const filter = useDebounce(
    pickBy(innerFilter, (v) => !isEmpty(v)),
    300
  );

  const onSearchChange = (search: string) => {
    setFilter((filter) => ({
      ...filter,
      search,
    }));
  };

  const onUsersChange = (userIds: number[]) => {
    setFilter((filter) => ({
      ...filter,
      userIds,
    }));
  };

  const onShowUserIssueChange = (showUserIssues: boolean) => {
    setFilter((filter) => ({
      ...filter,
      showUserIssues,
    }));
  };

  const onLastUpdatedChanged = (lastUpdated: boolean) => {
    setFilter((filter) => ({
      ...filter,
      lastUpdated,
    }));
  };

  const resetFilter = () => setFilter(defaultFilter);

  const hasFilter = !isEqual(innerFilter, defaultFilter);

  return (
    <FilterContext.Provider
      value={{
        hasFilter,
        filter: filter as ProjectFilter,
        innerFilter,
        onSearchChange,
        onUsersChange,
        onShowUserIssueChange,
        onLastUpdatedChanged,
        resetFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
