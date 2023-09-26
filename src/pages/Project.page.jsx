import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import EventList from '../components/EventList.jsx';
import { getProjects } from '../services/firebase/project.js';

const ProjectPage = () => {
  const [events, setEvents] = useState([]);
  const { projectID } = useParams();

  useEffect(() => {
    getProjects(projectID).then(value => setEvents(value.events));
  }, [projectID]);

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default ProjectPage;
