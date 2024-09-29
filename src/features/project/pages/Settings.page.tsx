import Breadcrumbs from 'components/shared/Breadcrumbs';
import { useGetProjectQuery } from 'features/project/api';
import { FC } from 'react';

import ProjectHeader from '../components/ProjectHeader/ProjectHeader.component';
import Settings from '../components/Settings';

const SettingsPage: FC = () => {
  const { data: project } = useGetProjectQuery();
  // todo: create helper
  const breadcrumbs = project ? [project.title, 'Project settings'] : [];

  return (
    <>
      <Breadcrumbs items={['Projects', ...breadcrumbs]} />
      <ProjectHeader name="Project settings" />
      {project && <Settings project={project} />}
    </>
  );
};

export default SettingsPage;
