import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/authenScreen/login'
import Register from './components/authenScreen/register'
import AppRouter from './components/Router/AppRouter';

import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);