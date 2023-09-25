import React, { lazy } from 'react';

import Loadable from '../components/Loadable.jsx';

const NotFoundPage = Loadable(lazy(() => import('../pages/NotFound.page.jsx')));

const NotFoundRouter = {
  path: '*',
  element: <NotFoundPage />,
};

export default NotFoundRouter;
