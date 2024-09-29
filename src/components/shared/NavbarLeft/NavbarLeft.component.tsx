import Icon from 'components/common/Icon';
import { Button } from 'components/controls/Button';
import Help from 'components/shared/Help';
import Tooltip from 'rc-tooltip';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Logo } from './logo.svg';
import { ActionButtons, Bottom, NavbarLeftStyled } from './NavbarLeft.styled';

const NavbarLeft: FC = () => {
  const navigate = useNavigate();

  return (
    <NavbarLeftStyled>
      <Logo />
      <ActionButtons>
        <Tooltip align={{ offset: [-4, 0] }} overlay="Search issues">
          <Button className="icon round" onClick={() => navigate('?search-issues')}>
            <Icon name="search" />
          </Button>
        </Tooltip>
        <Tooltip align={{ offset: [-4, 0] }} overlay="Create issue">
          <Button className="icon round" onClick={() => navigate('?create-issue')}>
            <Icon name="plus" />
          </Button>
        </Tooltip>
      </ActionButtons>
      <Bottom>
        <Help />
      </Bottom>
    </NavbarLeftStyled>
  );
};

export default NavbarLeft;
