import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Register from "../authenScreen/register";
import Login from "../authenScreen/login";
import Home from "../Home/home";

function AppRouter(){
    
    return(
         <BrowserRouter>
         <Routes>
             <Route path='/login' element={<Login/>}></Route>
             <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
         </Routes>
     </BrowserRouter>

    )
}

export default AppRouter;
