import React from 'react';

const EventListItem = ({ title, cost, date }) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/2 flex flex-col">
        <div>{title}</div>
        <div>我付的錢</div>
      </div>
      <div className="basis-1/2 flex flex-col">
        <div>{cost}</div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default EventListItem;
