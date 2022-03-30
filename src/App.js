import './App.css';
import Login from './components/authenScreen/login';
import Register from './components/authenScreen/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
     )
}

export default App;