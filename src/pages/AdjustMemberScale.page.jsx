import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@nextui-org/react';

import MemberList from '../components/MemberList.jsx';
import { tableHeaderColumns } from '../constants/members.js';
import { getMembers } from '../services/firebase/member.js';

const AdjustMemberScalePage = () => {
  const [members, setMembers] = useState([]);
  const { projectID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: 判斷是否改用監聽事件來即時更新 https://firebase.google.com/docs/database/web/read-and-write?hl=zh&authuser=6#web_value_events
    getMembers(projectID).then(data => {
      setMembers(data);
    });
  }, [projectID]);

  const handleClickSaveButton = () => {
    navigate(`/p/${projectID}/add`, { replace: true });
  };

  return (
    <div>
      {members && <MemberList members={members} tableColumns={tableHeaderColumns} />}
      <Button color="primary" onClick={handleClickSaveButton}>
        儲存
      </Button>
    </div>
  );
};

export default AdjustMemberScalePage;
