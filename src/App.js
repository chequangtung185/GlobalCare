import './App.css';
import Login from './components/authenScreen/login';
import Register from './components/authenScreen/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import AppRouter from './components/Router/AppRouter';

function App() {
  return(
    <AppRouter/>
    )
}

export default App;