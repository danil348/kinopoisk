import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./Router/Router";
import { AuthContextProvider } from './context/AuthContext';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthContextProvider>
    <React.StrictMode>
      <Router/>
    </React.StrictMode>
  </AuthContextProvider>
)
