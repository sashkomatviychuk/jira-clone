import { FC } from 'react';
import get from 'lodash/get';

import SidebarStyled, { Divider } from './Sidebar.styled';
import Icon from 'components/common/Icon';
import ProjectInfo from 'features/project/components/ProjectInfo';
import NavLink from 'components/common/NavLink';
import { useGetProjectQuery } from 'features/project/api/project.api';

const Sidebar: FC = () => {
  const { data: project } = useGetProjectQuery();

  return (
    <SidebarStyled>
      <ProjectInfo name={get(project, 'title', '')} category={get(project, 'category', '')} />
      <NavLink to={'/project'}>
        <Icon name="board" />
        <span>Kanban board</span>
      </NavLink>
      <NavLink to={'/project/settings'}>
        <Icon name="settings" />
        <span>Project settings</span>
      </NavLink>
      <Divider />
      <NavLink to={'/'} className="disabled" onClick={(e) => e.preventDefault()}>
        <Icon name="shipping" />
        <span>Releases</span>
      </NavLink>
      <NavLink to={'/'} className="disabled" onClick={(e) => e.preventDefault()}>
        <Icon name="issues" />
        <span>Issues and filters</span>
      </NavLink>
      <NavLink to={'/'} className="disabled" onClick={(e) => e.preventDefault()}>
        <Icon name="page" />
        <span>Pages</span>
      </NavLink>
      <NavLink to={'/'} className="disabled" onClick={(e) => e.preventDefault()}>
        <Icon name="reports" />
        <span>Reports</span>
      </NavLink>
      <NavLink to={'/'} className="disabled" onClick={(e) => e.preventDefault()}>
        <Icon name="component" />
        <span>Components</span>
      </NavLink>
    </SidebarStyled>
  );
};

export default Sidebar;
