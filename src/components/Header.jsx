import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';

import Logo from '../components/Logo.jsx';
import MembersButton from './MembersButton.jsx';

const Header = () => {
  const navigate = useNavigate();

  const handleClickMembersButton = () => {
    navigate('members', { relative: 'path' });
  };

  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Logo />
        <p className="ml-2 font-bold text-inherit">ACGO</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <h4 className="font-bold text-large">標題</h4>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <MembersButton onClick={handleClickMembersButton} />
        </NavbarItem>
        <NavbarItem>
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
