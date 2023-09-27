import React from 'react';

import EventListItem from './EventListItem.jsx';

const EventList = ({ events }) => {
  return (
    <div>
      {events.map(event => (
        <EventListItem
          key={event?.id}
          title={event?.title}
          cost={event?.cost}
          paidBy={event?.paidBy}
          createdAt={event?.createdAt}
        />
      ))}
    </div>
  );
};

export default EventList;
