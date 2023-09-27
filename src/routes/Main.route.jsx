import React, { lazy } from 'react';

import Loadable from '../components/Loadable.jsx';
import MainLayout from '../layouts/Main.layout.jsx';

const MainPage = Loadable(lazy(() => import('../pages/Main.page.jsx')));
const ProjectPage = Loadable(lazy(() => import('../pages/Project.page.jsx')));
const AddEventPage = Loadable(lazy(() => import('../pages/AddEvent.page.jsx')));
const MembersPage = Loadable(lazy(() => import('../pages/Members.page.jsx')));

const MainRouter = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/p/:projectID',
      element: <ProjectPage />,
    },
    {
      path: '/p/:projectID/add',
      element: <AddEventPage />,
    },
    {
      path: '/p/:projectID/members',
      element: <MembersPage />,
    },
  ],
};

export default MainRouter;
