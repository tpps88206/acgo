import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getEvents } from '../services/firebase/event.js';
import { getMembers } from '../services/firebase/member.js';
import { getBalanceResult } from '../utils/balance.js';

const BalancePage = () => {
  const { projectID } = useParams();
  const [events, setEvents] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // TODO: 判斷是否改用監聽事件來即時更新 https://firebase.google.com/docs/database/web/read-and-write?hl=zh&authuser=6#web_value_events
    getEvents(projectID).then(data => setEvents(data));
    getMembers(projectID).then(data => {
      setMembers(data);
    });
  }, [projectID]);

  useEffect(() => {
    console.log(getBalanceResult(events, members));
  }, [events, members]);

  return <div>BalancePage</div>;
};

export default BalancePage;
