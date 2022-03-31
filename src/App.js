import React, { useState } from 'react';
import './App.css';
import Login from './components/authenScreen/login';
import Register from './components/authenScreen/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './components/Router/AppRouter';

function App() {

  return(
     <AppRouter></AppRouter>

     )
}

export default App;