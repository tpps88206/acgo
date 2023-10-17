import React from 'react';

import { CircularProgress } from '@nextui-org/react';

const Progress = () => {
  return (
    <div className="w-full">
      <CircularProgress className="m-auto" size="lg" aria-label="Loading..." />
    </div>
  );
};

export default Progress;
