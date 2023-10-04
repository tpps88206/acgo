import React from 'react';

import { Divider } from '@nextui-org/react';

import { convertTimestamp } from '../utils/timestamp.js';
import EventListItem from './EventListItem.jsx';

const EventList = ({ events, members }) => {
  return (
    <div>
      {events.map((event, index) => {
        const paidByName = members.find(member => member.id === event?.paidBy);

        return (
          <>
            {index > 0 && <Divider className="my-4" />}
            <EventListItem
              key={event?.id}
              title={event?.title}
              cost={event?.cost}
              paidBy={paidByName?.name}
              createdAt={convertTimestamp(event?.createdAt)}
            />
          </>
        );
      })}
    </div>
  );
};

export default EventList;
