import React from 'react';

import { Chip } from '@nextui-org/react';

const EventListItem = ({ title, cost, paidBy, createdAt }) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/2 flex flex-col">
        <p className="text-xl mb-4">{title}</p>
        <span>
          {paidBy}{' '}
          <Chip color={cost >= 0 ? 'success' : 'danger'} variant="bordered">
            {cost >= 0 ? '先收' : '先付'}
          </Chip>
        </span>
      </div>
      <div className="basis-1/2 flex flex-col">
        <p className="text-xl mb-4">{cost >= 0 ? cost : cost * -1}</p>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default EventListItem;
