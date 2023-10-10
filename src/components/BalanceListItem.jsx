import React from 'react';

import { Progress } from '@nextui-org/react';

const BalanceListItem = ({ name, needToPay, total }) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/4 flex flex-col">
        <div className="self-start">{name}</div>
      </div>
      <div className="basis-3/4 flex flex-col">
        <div className="self-center">{needToPay}</div>
        <div className="flex flex-row">
          <div className="basis-1/2 flex flex-col">
            {needToPay < 0 && (
              <Progress
                size="sm"
                aria-label="balances bar"
                value={(needToPay / total) * -100}
                className="max-w-md rotate-180"
                color="danger"
              />
            )}
          </div>
          <div className="basis-1/2 flex flex-col">
            {needToPay > 0 && (
              <Progress
                size="sm"
                aria-label="balances bar"
                value={(needToPay / total) * 100}
                className="max-w-md"
                color="success"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceListItem;
