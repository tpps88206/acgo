import React from 'react';

import { Button } from '@nextui-org/react';

import MembersIcon from '../icons/Members.icon.jsx';

const MembersButton = props => {
  return (
    <div className="flex gap-4 items-center">
      <Button isIconOnly variant="light" {...props}>
        <MembersIcon />
      </Button>
    </div>
  );
};

export default MembersButton;
