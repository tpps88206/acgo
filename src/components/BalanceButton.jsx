import React from 'react';

import { Button } from '@nextui-org/react';

import BalanceIcon from '../icons/Balance.icon.jsx';

const BalanceButton = props => {
  return (
    <div className="flex gap-4 items-center">
      <Button isIconOnly variant="light" {...props}>
        <BalanceIcon />
      </Button>
    </div>
  );
};

export default BalanceButton;
