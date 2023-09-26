import React from 'react';

import EventListItem from './EventListItem.jsx';

const EventList = ({ events }) => {
  return (
    <div>
      {Array.isArray(events) &&
        events.map((event, index) => (
          <EventListItem key={index} title={event?.title} cost={event?.cost} date={event?.date} />
        ))}
    </div>
  );
};

export default EventList;
