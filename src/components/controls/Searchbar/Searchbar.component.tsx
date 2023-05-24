import { FC, ChangeEvent, memo } from 'react';
import { Container, SearchInput } from './Searchbar.styled';
import Icon from 'components/common/Icon';

type SearchbarProps = {
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Searchbar: FC<SearchbarProps> = (props) => {
  return (
    <Container className="search-container">
      <Icon name="search" size={14} top={8} left={8} />
      <SearchInput className="search-input" {...props} />
    </Container>
  );
};

export default memo(Searchbar);
