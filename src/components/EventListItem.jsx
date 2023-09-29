import React from 'react';

const EventListItem = ({ title, cost, paidBy, createdAt }) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/2 flex flex-col">
        <div>{title}</div>
        {cost >= 0 ? <div>{paidBy} 先收</div> : <div>{paidBy} 先付</div>}
      </div>
      <div className="basis-1/2 flex flex-col">
        {cost >= 0 ? <div>{cost}</div> : <div>{cost * -1}</div>}
        <div>{createdAt}</div>
      </div>
    </div>
  );
};

export default EventListItem;
