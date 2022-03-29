import { Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../authenScreen/register";
import Login from "../authenScreen/login";


export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>

    )
}

