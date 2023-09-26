import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, User } from '@nextui-org/react';

const MainLayout = () => {
  return (
    <div>
      <Navbar maxWidth="full">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACGO</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <h4 className="font-bold text-large">標題</h4>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <User
              avatarProps={{
                src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
              }}
            />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default MainLayout;
