import React from 'react';

import { Divider } from '@nextui-org/react';

import BalanceListItem from './BalanceListItem.jsx';

const BalanceList = ({ balances, total }) => {
  return (
    <div>
      {balances.map((balance, index) => {
        return (
          <>
            {index > 0 && <Divider className="my-4" />}
            <BalanceListItem
              key={balance?.memberID}
              name={balance?.name}
              needToPay={balance?.needToPay}
              total={total}
            />
          </>
        );
      })}
    </div>
  );
};

export default BalanceList;
