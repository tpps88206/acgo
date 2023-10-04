import React from 'react';

import classNames from 'classnames';

import { Button } from '@nextui-org/react';

import AddIcon from '../icons/Add.icon.jsx';

const AddButton = ({ className, ...props }) => {
  return (
    <div className="flex gap-4 items-center">
      <Button className={classNames('w-20 h-20', className)} isIconOnly color="primary" variant="shadow" {...props}>
        <AddIcon />
      </Button>
    </div>
  );
};

export default AddButton;
