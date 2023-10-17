import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';

import Logo from '../components/Logo.jsx';
import { getPorject } from '../services/firebase/project.js';
import BalanceButton from './BalanceButton.jsx';
import MembersButton from './MembersButton.jsx';

const Header = () => {
  const [project, setProject] = useState(null);
  const navigate = useNavigate();
  const { projectID } = useParams();

  useEffect(() => {
    // TODO: 判斷是否改用監聽事件來即時更新 https://firebase.google.com/docs/database/web/read-and-write?hl=zh&authuser=6#web_value_events
    getPorject(projectID).then(data => {
      setProject(data);
    });
  }, [projectID]);

  const handleClickBalanceButton = () => {
    navigate(`/p/${projectID}/balance`);
  };
  const handleClickMembersButton = () => {
    navigate(`/p/${projectID}/members`);
  };
  const handleClickProjectTitle = () => {
    navigate(`/p/${projectID}`);
  };

  return (
    <div>
      <Navbar maxWidth="full">
        <NavbarBrand>
          <Logo />
          <p className="ml-2 font-bold text-inherit cursor-pointer" onClick={handleClickProjectTitle}>
            {project?.name}
          </p>
        </NavbarBrand>

        <NavbarContent justify="end">
          {projectID && (
            <>
              <NavbarItem>
                <BalanceButton aria-label="balance button" onClick={handleClickBalanceButton} />
              </NavbarItem>
              <NavbarItem>
                <MembersButton aria-label="members button" onClick={handleClickMembersButton} />
              </NavbarItem>
            </>
          )}
          <NavbarItem>
            <Avatar showFallback src="https://images.unsplash.com/broken" />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Header;
