import React, { Fragment } from 'react';

import { Divider } from '@nextui-org/react';

import BalanceListItem from './BalanceListItem.jsx';

const BalanceList = ({ balances, total }) => {
  return (
    <div>
      {balances.map((balance, index) => {
        return (
          <Fragment key={index}>
            {index > 0 && <Divider className="my-4" />}
            <BalanceListItem
              key={balance?.memberID}
              name={balance?.name}
              needToPay={balance?.needToPay}
              total={total}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default BalanceList;
