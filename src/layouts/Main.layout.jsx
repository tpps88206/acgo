import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header.jsx';

const MainLayout = () => {
  return (
    <div className="mb-4">
      <Header />
      <div className="mx-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
