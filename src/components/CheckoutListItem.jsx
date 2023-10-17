import React from 'react';

import DownIcon from '../icons/Down.icon.jsx';

const CheckoutListItem = ({ name, owesName, cost }) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/2 flex flex-col">
        <div className="self-start">{name}</div>
        <div className="self-start my-2">
          <DownIcon />
        </div>
        <div className="self-start">{owesName}</div>
      </div>
      <div className="basis-1/2 flex flex-col">
        <div className="self-center">{cost}</div>
      </div>
    </div>
  );
};

export default CheckoutListItem;
