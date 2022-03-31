import { Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../authenScreen/register";
import Login from "../authenScreen/login";
import Home from "../home/home";
import ReportDemo from "../reportDemo/reportDemo";

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/home/reportdemo" element={<ReportDemo />} />
            </Routes>
        </BrowserRouter>
    )
}



