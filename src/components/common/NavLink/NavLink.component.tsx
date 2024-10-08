import classNames from 'classnames';
import { FC } from 'react';
import { LinkProps, useLocation } from 'react-router-dom';

import { NavLinkStyled } from './NavLink.styled';

const NavLink: FC<LinkProps> = ({ className, ...props }) => {
  const { pathname } = useLocation();
  const isActive = pathname === props.to;

  return <NavLinkStyled className={classNames({ active: isActive }, className)} {...props} />;
};

export default NavLink;
