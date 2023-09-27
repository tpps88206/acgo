import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import map from 'lodash/map';

import MemberList from '../components/MemberList.jsx';
import { getMembers } from '../services/firebase/member.js';

const MembersPage = () => {
  const [members, setMembers] = useState(null);
  const { projectID } = useParams();

  useEffect(() => {
    // TODO: 判斷是否改用監聽事件來即時更新 https://firebase.google.com/docs/database/web/read-and-write?hl=zh&authuser=6#web_value_events
    getMembers(projectID).then(value => {
      const memberListFromStore = map(value, (v, index) => {
        return {
          ...v,
          memberID: index,
        };
      });
      setMembers(memberListFromStore);
    });
  }, [projectID]);

  return <div>{members && <MemberList members={members} />}</div>;
};

export default MembersPage;
