import { FC } from 'react';
import Tooltip from 'rc-tooltip';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from 'resources/svg/logo.svg';
import { NavbarLeftStyled, ActionButtons, Bottom } from './NavbarLeft.styled';
import { Button } from 'components/controls/Button';
import Icon from 'components/common/Icon';
import Help from 'components/shared/Help';

const NavbarLeft: FC = () => {
  const navigate = useNavigate();

  return (
    <NavbarLeftStyled>
      <Logo />
      <ActionButtons>
        <Tooltip overlay="Search issues" align={{ offset: [-4, 0] }}>
          <Button className="icon round" onClick={() => navigate('?search-issues')}>
            <Icon name="search" />
          </Button>
        </Tooltip>
        <Tooltip overlay="Create issue" align={{ offset: [-4, 0] }}>
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
