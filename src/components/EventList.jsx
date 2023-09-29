import React from 'react';

import { convertTimestamp } from '../utils/timestamp.js';
import EventListItem from './EventListItem.jsx';

const EventList = ({ events, members }) => {
  return (
    <div>
      {events.map(event => {
        const paidByName = members.find(member => member.id === event?.paidBy);

        return (
          <EventListItem
            key={event?.id}
            title={event?.title}
            cost={event?.cost}
            paidBy={paidByName?.name}
            createdAt={convertTimestamp(event?.createdAt)}
          />
        );
      })}
    </div>
  );
};

export default EventList;
