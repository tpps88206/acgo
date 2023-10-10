import React from 'react';

import classNames from 'classnames';

import { Button } from '@nextui-org/react';

import AddIcon from '../icons/Add.icon.jsx';

const AddButton = ({ className, ...props }) => {
  return (
    <Button
      className={classNames('w-20 h-20 rounded-full', className)}
      isIconOnly
      color="primary"
      variant="shadow"
      {...props}
    >
      <AddIcon />
    </Button>
  );
};

export default AddButton;
