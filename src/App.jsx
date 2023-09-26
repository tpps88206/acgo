import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { NextUIProvider } from '@nextui-org/react';

import ErrorBoundary from './components/ErrorBoundary.jsx';
import Router from './routes/router.js';

const App = () => {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </BrowserRouter>
    </NextUIProvider>
  );
};

export default App;
