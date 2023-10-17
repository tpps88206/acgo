import React, { Fragment } from 'react';

import { Divider } from '@nextui-org/react';

import CheckoutListItem from './CheckoutListItem.jsx';

const CheckoutList = ({ checkoutResult }) => {
  return (
    <div>
      {checkoutResult.map((checkout, index) => {
        return (
          <Fragment key={index}>
            {index > 0 && <Divider className="my-4" />}
            <CheckoutListItem
              key={checkout?.memberID}
              name={checkout?.name}
              owesName={checkout?.owesName}
              cost={checkout?.cost}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default CheckoutList;
