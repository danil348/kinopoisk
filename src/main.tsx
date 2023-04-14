import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './context/AuthContext';
import './index.scss';
import Router from "./Router/Router";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthContextProvider>
    <React.StrictMode>
      <Router/>
    </React.StrictMode>
  </AuthContextProvider>
)
