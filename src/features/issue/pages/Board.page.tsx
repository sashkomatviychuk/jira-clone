import { FC } from 'react';
import Breadcrumbs from 'components/shared/Breadcrumbs';
import ProjectHeader from '../../project/components/ProjectHeader/ProjectHeader.component';
import Filters from '../components/Filter/Filter.component';
import { FiltersProvider } from '../../project/contexts/Filters.context';
import { useGetProjectQuery } from 'features/project/api';
import Board from '../components/Board';
import { Outlet } from 'react-router-dom';

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
