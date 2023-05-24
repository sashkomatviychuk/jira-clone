import { FC, useCallback, useContext } from 'react';
import Searchbar from 'components/controls/Searchbar';
import { FilterContext } from 'features/project/contexts/Filters.context';

const SearchForm: FC = () => {
  const { innerFilter, onSearchChange } = useContext(FilterContext);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.currentTarget.value),
    []
  );

  return (
    <Searchbar
      value={innerFilter.search}
      onChange={handleSearch}
      placeholder="Search issues by title..."
    />
  );
};

export default SearchForm;
