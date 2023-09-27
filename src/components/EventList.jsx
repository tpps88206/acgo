import React from 'react';

import map from 'lodash/map';

import EventListItem from './EventListItem.jsx';

const EventList = ({ events }) => {
  return (
    <div>
      {events &&
        map(events, (event, index) => (
          <EventListItem key={index} title={event?.title} cost={event?.cost} createdAt={event?.createdAt} />
        ))}
    </div>
  );
};

export default EventList;
