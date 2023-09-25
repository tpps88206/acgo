import React, { Suspense } from 'react';

import Progress from './Progress.jsx';

const Loadable = Component => props => (
  <Suspense fallback={<Progress />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
