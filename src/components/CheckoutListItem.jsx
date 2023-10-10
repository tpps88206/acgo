import React from 'react';

const CheckoutListItem = ({ name, owesName, cost }) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/2 flex flex-col">
        <div className="self-start">{name}</div>
        <div className="self-start">owes</div>
        <div className="self-start">{owesName}</div>
      </div>
      <div className="basis-1/2 flex flex-col">
        <div className="self-center">{cost}</div>
      </div>
    </div>
  );
};

export default CheckoutListItem;
