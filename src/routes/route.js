import { useRoutes } from 'react-router-dom';

import MainRoutes from './Main.route.jsx';
import NotFoundRoutes from './NotFound.route.jsx';

export default function Router() {
  return useRoutes([MainRoutes, NotFoundRoutes]);
}
