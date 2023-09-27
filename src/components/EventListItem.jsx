import React from 'react';

const EventListItem = ({ title, cost, paidBy, createdAt }) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/2 flex flex-col">
        <div>{title}</div>
        <div>{paidBy} 先付</div>
      </div>
      <div className="basis-1/2 flex flex-col">
        <div>{cost}</div>
        <div>{createdAt}</div>
      </div>
    </div>
  );
};

export default EventListItem;
