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
          <p className="ml-2 font-bold text-inherit">ACGO</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <h4 className="font-bold text-large cursor-pointer" onClick={handleClickProjectTitle}>
              {project?.name}
            </h4>
          </NavbarItem>
        </NavbarContent>
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
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Header;
