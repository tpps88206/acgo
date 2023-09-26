import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getProjects } from '../services/firebase/project.js';

const ProjectPage = () => {
  const { projectID } = useParams();

  useEffect(() => {
    getProjects(projectID);
  }, [projectID]);

  return <div>project page</div>;
};

export default ProjectPage;
