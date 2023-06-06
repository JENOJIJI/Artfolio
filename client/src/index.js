import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
  <GoogleOAuthProvider clientId='334818205861-4uk5k4aodbabsebh40th6ebco3js9q9s.apps.googleusercontent.com'>
    <Router>
      <App />
    </Router>
  </GoogleOAuthProvider>,
  document.getElementById('root'),
);

