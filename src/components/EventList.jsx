import React from 'react';

import map from 'lodash/map';

import EventListItem from './EventListItem.jsx';

const EventList = ({ events }) => {
  return (
    <div>
      {map(events, event => (
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
