import { FC } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import BoardPage from 'features/issue/pages/Board.page';
import ProjectLayout from 'features/project/layouts/Project.layout';
import SettingsPage from 'features/project/pages/Settings.page';
import TestPage from 'features/auth/Test.page';
import EditIssuePage from 'features/issue/pages/EditIssue.page';

const RoutesContainer: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/project'} />} />
        <Route path="/project" element={<ProjectLayout />}>
          <Route path="" element={<BoardPage />}>
            <Route path="issue/:issueId" element={<EditIssuePage />} />
          </Route>
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesContainer;
