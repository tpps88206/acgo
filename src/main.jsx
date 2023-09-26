import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

import App from './App.jsx';
import { firebaseConfig } from './configs/firebase.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
getDatabase(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
