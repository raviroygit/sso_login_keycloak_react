// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import keycloakInst from './components/keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

const initOptions = { onLoad: 'login-required',checkLoginIframe: false, };

const root = ReactDOM.createRoot(
  document.getElementById("root") 
);

  root.render(
    <ReactKeycloakProvider authClient={keycloakInst} initOptions={initOptions}>
          <React.StrictMode>

        <App />
        </React.StrictMode>

        </ReactKeycloakProvider>
  );