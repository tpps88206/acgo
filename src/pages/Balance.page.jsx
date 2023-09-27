import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BalanceList from '../components/BalanceList.jsx';
import { getEvents } from '../services/firebase/event.js';
import { getMembers } from '../services/firebase/member.js';
import { getBalanceResult } from '../utils/balance.js';

const BalancePage = () => {
  const { projectID } = useParams();
  const [events, setEvents] = useState([]);
  const [members, setMembers] = useState([]);
  const [balances, setBalances] = useState([]);
  const [isLoadedEvents, setIsLoadedEvents] = useState(false);
  const [isLoadedMembers, setIsLoadedMembers] = useState(false);

  useEffect(() => {
    // TODO: 判斷是否改用監聽事件來即時更新 https://firebase.google.com/docs/database/web/read-and-write?hl=zh&authuser=6#web_value_events
    getEvents(projectID).then(data => {
      setEvents(data);
      setIsLoadedEvents(true);
    });
    getMembers(projectID).then(data => {
      setMembers(data);
      setIsLoadedMembers(true);
    });
  }, [projectID]);

  useEffect(() => {
    if (isLoadedEvents && isLoadedMembers) {
      const balanceResult = getBalanceResult(events, members);
      setBalances(balanceResult);
    }
  }, [events, members, isLoadedEvents, isLoadedMembers]);

  return (
    <div>
      <BalanceList balances={balances} />
    </div>
  );
};

export default BalancePage;
