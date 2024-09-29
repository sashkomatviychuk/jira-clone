import Breadcrumbs from 'components/shared/Breadcrumbs';
import { useGetProjectQuery } from 'features/project/api';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import ProjectHeader from '../../project/components/ProjectHeader/ProjectHeader.component';
import { FiltersProvider } from '../../project/contexts/Filters.context';
import Board from '../components/Board';
import Filters from '../components/Filter/Filter.component';

const BoardPage: FC = () => {
  const { data: project } = useGetProjectQuery();

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Breadcrumbs items={['Projects', project.title, 'Kanban board']} />
      <ProjectHeader name="Kanban board" />
      <div style={{ paddingTop: '8px' }}>
        <FiltersProvider>
          <Filters />
          <Board />
        </FiltersProvider>
      </div>
      <Outlet />
    </>
  );
};

export default BoardPage;
