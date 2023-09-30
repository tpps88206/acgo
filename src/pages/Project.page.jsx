import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AddButton from '../components/AddButton.jsx';
import EventList from '../components/EventList.jsx';
import { getEvents } from '../services/firebase/event.js';
import { getMembers } from '../services/firebase/member.js';

const ProjectPage = () => {
  const [events, setEvents] = useState([]);
  const [members, setMembers] = useState([]);
  const { projectID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: 判斷是否改用監聽事件來即時更新 https://firebase.google.com/docs/database/web/read-and-write?hl=zh&authuser=6#web_value_events
    getEvents(projectID).then(data => {
      setEvents(data);
    });
    getMembers(projectID).then(data => {
      setMembers(data);
    });
  }, [projectID]);

  const handleClickAddButton = () => {
    navigate('addExpense');
  };

  return (
    <div>
      {events && <EventList events={events} members={members} />}
      <AddButton onClick={handleClickAddButton} />
    </div>
  );
};

export default ProjectPage;
