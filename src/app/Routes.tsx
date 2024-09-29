import TestPage from 'features/auth/Test.page';
import BoardPage from 'features/issue/pages/Board.page';
import EditIssuePage from 'features/issue/pages/EditIssue.page';
import ProjectLayout from 'features/project/layouts/Project.layout';
import SettingsPage from 'features/project/pages/Settings.page';
import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const RoutesContainer: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigate to={'/project'} />} path="/" />
        <Route element={<ProjectLayout />} path="/project">
          <Route element={<BoardPage />} path="">
            <Route element={<EditIssuePage />} path="issue/:issueId" />
          </Route>
          <Route element={<SettingsPage />} path="settings" />
        </Route>
        <Route element={<TestPage />} path="/test" />
        <Route element={<div>Page not found</div>} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesContainer;
