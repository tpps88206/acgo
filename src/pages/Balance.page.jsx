import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Card, CardBody } from '@nextui-org/react';

import BalanceList from '../components/BalanceList.jsx';
import CheckoutList from '../components/CheckoutList.jsx';
import { getEvents } from '../services/firebase/event.js';
import { getMembers } from '../services/firebase/member.js';
import { getBalanceResult, getBalancesCheckout, getBalancesTotal } from '../utils/balance.js';

const BalancePage = () => {
  const { projectID } = useParams();
  const [events, setEvents] = useState([]);
  const [members, setMembers] = useState([]);
  const [balances, setBalances] = useState([]);
  const [checkoutResult, setCheckoutResult] = useState([]);
  const [isLoadedEvents, setIsLoadedEvents] = useState(false);
  const [isLoadedMembers, setIsLoadedMembers] = useState(false);
  const [balanceTotalCost, setBalanceTotalCost] = useState(0);

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

  useEffect(() => {
    const total = getBalancesTotal(balances);
    const checkout = getBalancesCheckout(balances);

    setBalanceTotalCost(total);
    setCheckoutResult(checkout);
  }, [balances]);

  return (
    <div>
      {balances && (
        <Card className="container mx-auto px-4">
          <CardBody>
            <BalanceList balances={balances} total={balanceTotalCost} />
          </CardBody>
        </Card>
      )}
      {checkoutResult && (
        <Card className="container mx-auto px-4 mt-4">
          <CardBody>
            <CheckoutList checkoutResult={checkoutResult} />
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default BalancePage;
