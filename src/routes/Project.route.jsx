import React, { lazy } from 'react';

import Loadable from '../components/Loadable.jsx';
import MainLayout from '../layouts/Main.layout.jsx';

const ProjectPage = Loadable(lazy(() => import('../pages/Project.page.jsx')));
const AddEventPage = Loadable(lazy(() => import('../pages/AddEvent.page.jsx')));
const MembersPage = Loadable(lazy(() => import('../pages/Members.page.jsx')));
const AddMemberPage = Loadable(lazy(() => import('../pages/AddMember.page.jsx')));
const BalancePage = Loadable(lazy(() => import('../pages/Balance.page.jsx')));

const ProjectRouter = {
  path: '/p',
  element: <MainLayout />,
  children: [
    {
      path: '/p/:projectID',
      element: <ProjectPage />,
    },
    {
      path: '/p/:projectID/addExpense',
      element: <AddEventPage mode="expense" />,
    },
    {
      path: '/p/:projectID/addIncome',
      element: <AddEventPage mode="income" />,
    },
    {
      path: '/p/:projectID/members',
      element: <MembersPage />,
    },
    {
      path: '/p/:projectID/members/add',
      element: <AddMemberPage />,
    },
    {
      path: '/p/:projectID/balance',
      element: <BalancePage />,
    },
  ],
};

export default ProjectRouter;
