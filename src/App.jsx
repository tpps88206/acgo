import './App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { NextUIProvider } from '@nextui-org/react';

import ErrorBoundary from './components/ErrorBoundary.jsx';
import Router from './routes/route.js';

const App = () => {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </NextUIProvider>
    </BrowserRouter>
  );
};

export default App;
