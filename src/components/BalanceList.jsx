import React from 'react';

import BalanceListItem from './BalanceListItem.jsx';

const BalanceList = ({ balances }) => {
  return (
    <div>
      {balances.map(balance => (
        <BalanceListItem key={balance?.memberID} name={balance?.name} needToPay={balance?.needToPay} />
      ))}
    </div>
  );
};

export default BalanceList;
