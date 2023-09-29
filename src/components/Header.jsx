import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';

import Logo from '../components/Logo.jsx';
import BalanceButton from './BalanceButton.jsx';
import MembersButton from './MembersButton.jsx';

const Header = () => {
  const navigate = useNavigate();

  // TODO: 從專案內的其他頁面點擊 header 按鈕網址會錯
  const handleClickBalanceButton = () => {
    navigate('balance', { relative: 'path' });
  };
  // TODO: 從專案內的其他頁面點擊 header 按鈕網址會錯
  const handleClickMembersButton = () => {
    navigate('members', { relative: 'path' });
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
            <h4 className="font-bold text-large">標題</h4>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <BalanceButton onClick={handleClickBalanceButton} />
          </NavbarItem>
          <NavbarItem>
            <MembersButton onClick={handleClickMembersButton} />
          </NavbarItem>
          <NavbarItem>
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Header;
