import { useRoutes } from 'react-router-dom';

import NotFoundRouter from './NotFound.route.jsx';
import ProjectRouter from './Project.route.jsx';

export default function Router() {
  return useRoutes([ProjectRouter, NotFoundRouter]);
}
