import Searchbar from 'components/controls/Searchbar';
import { FilterContext } from 'features/project/contexts/Filters.context';
import { FC, useCallback, useContext } from 'react';

const SearchForm: FC = () => {
  const { innerFilter, onSearchChange } = useContext(FilterContext);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.currentTarget.value),
    [onSearchChange]
  );

  return (
    <Searchbar
      onChange={handleSearch}
      placeholder="Search issues by title..."
      value={innerFilter.search}
    />
  );
};

export default SearchForm;
