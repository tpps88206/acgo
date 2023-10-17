import React, { Fragment } from 'react';

import { Divider } from '@nextui-org/react';

import { convertTimestamp } from '../utils/timestamp.js';
import EventListItem from './EventListItem.jsx';

const EventList = ({ events, members }) => {
  return (
    <div>
      {events.map((event, index) => {
        const paidByName = members.find(member => member.id === event?.paidBy);

        return (
          <Fragment key={index}>
            {index > 0 && <Divider className="my-4" />}
            <EventListItem
              title={event?.title}
              cost={event?.cost}
              paidBy={paidByName?.name}
              createdAt={convertTimestamp(event?.createdAt)}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default EventList;
