import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    
     domain="dev-orih68odghndocgw.us.auth0.com"
    clientId="jbHFbTLk0p5XLLEQQNIrZhtS1kEitQKv"
    authorizationParams={{
      redirect_uri: window.location.origin}}
      >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

