import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { NextUIProvider } from '@nextui-org/react';

import ErrorBoundary from './components/ErrorBoundary.jsx';
import { ModalProvider } from './context/Modal.context.jsx';
import Router from './routes/router.js';

const App = () => {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <ModalProvider>
            <Router />
          </ModalProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </NextUIProvider>
  );
};

export default App;
