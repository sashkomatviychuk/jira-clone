import Icon from 'components/common/Icon';
import { ChangeEvent, FC, memo } from 'react';

import { Container, SearchInput } from './Searchbar.styled';

type SearchbarProps = {
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Searchbar: FC<SearchbarProps> = (props) => {
  return (
    <Container className="search-container">
      <Icon left={8} name="search" size={14} top={8} />
      <SearchInput className="search-input" {...props} />
    </Container>
  );
};

export default memo(Searchbar);
