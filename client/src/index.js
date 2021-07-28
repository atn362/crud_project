import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import connection from '../../server/server.js';


ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
document.getElementById('root')
);

reportWebVitals();
