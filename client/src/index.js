import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';



ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
document.getElementById('root')
);

reportWebVitals();
