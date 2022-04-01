import React from "react";
import {
    Link,
    useNavigate
  } from "react-router-dom";
function Home(){
    let navigate = useNavigate();
    const Logout =() => {
        navigate("/")
    };
    return (
        <>
            <h2>Welcome to HomePage</h2>

            <div>
                <button onClick={Logout}>Logout</button>
            </div>

            <Link to={"/home/reportdemo"}>Chuyen trang report</Link>

        </>
    );
};

export default Home;
