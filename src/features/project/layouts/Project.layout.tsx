import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import NavbarLeft from 'components/shared/NavbarLeft';
import Sidebar from 'components/shared/Sidebar';
import { ProjectViewStyled } from '../components/ProjectView/ProjectView.styled';
// import { Modal } from 'components/common/Modal';
import CreateIssuePage from 'features/issue/pages/CreateIssue.page';
import SearchIssuesPage from 'features/issue/pages/SearchIssues.page';
import { useGetProjectQuery } from 'features/project/api';

const ProjectLayout: FC = () => {
  const { error, isLoading } = useGetProjectQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error while project loading</div>;
  }

  return (
    <>
      <NavbarLeft />
      <Sidebar />
      <ProjectViewStyled>
        <Outlet />
      </ProjectViewStyled>
      <CreateIssuePage />
      <SearchIssuesPage />
    </>
  );
};

export default ProjectLayout;
