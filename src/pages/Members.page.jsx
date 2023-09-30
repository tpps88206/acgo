import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AddButton from '../components/AddButton.jsx';
import MemberList from '../components/MemberList.jsx';
import { projectMemberListColumns } from '../constants/members.js';
import { getMembers } from '../services/firebase/member.js';

const MembersPage = () => {
  const [members, setMembers] = useState([]);
  const { projectID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: 判斷是否改用監聽事件來即時更新 https://firebase.google.com/docs/database/web/read-and-write?hl=zh&authuser=6#web_value_events
    getMembers(projectID).then(data => {
      setMembers(data);
    });
  }, [projectID]);

  const handleClickAddButton = () => {
    navigate('add');
  };

  return (
    <div>
      {members && <MemberList members={members} tableColumns={projectMemberListColumns} />}
      <AddButton onClick={handleClickAddButton} />
    </div>
  );
};

export default MembersPage;
