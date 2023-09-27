import React from 'react';

const BalanceListItem = ({ name, needToPay }) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/2 flex flex-col">
        <div>{name}</div>
      </div>
      <div className="basis-1/2 flex flex-col">
        <div>{needToPay}</div>
      </div>
    </div>
  );
};

export default BalanceListItem;
