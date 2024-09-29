import Icon from 'components/common/Icon';
import NavLink from 'components/common/NavLink';
import { useGetProjectQuery } from 'features/project/api';
import ProjectInfo from 'features/project/components/ProjectInfo';
import get from 'lodash/get';
import { FC } from 'react';

import SidebarStyled, { Divider } from './Sidebar.styled';

const Sidebar: FC = () => {
  const { data: project } = useGetProjectQuery();

  return (
    <SidebarStyled>
      <ProjectInfo category={get(project, 'category', '')} name={get(project, 'title', '')} />
      <NavLink to={'/project'}>
        <Icon name="board" />
        <span>Kanban board</span>
      </NavLink>
      <NavLink to={'/project/settings'}>
        <Icon name="settings" />
        <span>Project settings</span>
      </NavLink>
      <Divider />
      <NavLink className="disabled" onClick={(e) => e.preventDefault()} to={'/'}>
        <Icon name="shipping" />
        <span>Releases</span>
      </NavLink>
      <NavLink className="disabled" onClick={(e) => e.preventDefault()} to={'/'}>
        <Icon name="issues" />
        <span>Issues and filters</span>
      </NavLink>
      <NavLink className="disabled" onClick={(e) => e.preventDefault()} to={'/'}>
        <Icon name="page" />
        <span>Pages</span>
      </NavLink>
      <NavLink className="disabled" onClick={(e) => e.preventDefault()} to={'/'}>
        <Icon name="reports" />
        <span>Reports</span>
      </NavLink>
      <NavLink className="disabled" onClick={(e) => e.preventDefault()} to={'/'}>
        <Icon name="component" />
        <span>Components</span>
      </NavLink>
    </SidebarStyled>
  );
};

export default Sidebar;
