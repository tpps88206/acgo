import React from 'react';

import { Button } from '@nextui-org/react';

import AddIcon from '../icons/Add.icon.jsx';

const AddEventButton = props => {
  return (
    <div className="flex gap-4 items-center">
      <Button isIconOnly color="primary" variant="shadow" {...props}>
        <AddIcon />
      </Button>
    </div>
  );
};

export default AddEventButton;
