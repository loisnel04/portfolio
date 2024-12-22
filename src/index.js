import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToggleProvider } from './toggleLanguage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToggleProvider>
      <App />
    </ToggleProvider>
  </React.StrictMode>
);