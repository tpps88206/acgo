import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header.jsx';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <div className="h-4" />
    </div>
  );
};

export default MainLayout;
