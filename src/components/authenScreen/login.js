import React, { Component } from "react";
import logo from '../assets/images/logoglobalcare.png'
import './login_register.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Register from "./register";

class login extends React.Component{
    render(){
        return (
            <div className="container">
                
                <div className="formlogin">
                    <form > 
                        <div className="imagelogo">
                            <img src={logo} />   
                        </div>    
                        <div>
                            <p className="titlelogin">Đăng nhập</p>
                            <p className="txt">Sử dụng tài khoản GlobalCare</p>
                        </div>     
                        
                        <div>
                            <input className="inputtext" type='text' placeholder='Tên đăng nhập'/>
                            <br/>
                            <div className="forgotpass">
                                <a  href="https://www.google.com/">Quên mật khẩu ?</a><br></br>
                            </div>
                            
                        </div>
                        <div className="btn-link">  

                        <Router>
                           <Link to="/register" className="register">Đăng ký tài khoản</Link>
                           
                                <Routes>
                                    <Route path="/register" element={<Register />} />
                                </Routes>
                            </Router>

                            <button className="btn-show">Tiếp theo</button>
                        </div>
                    </form>
                </div>           
            </div>

        );
      }

    }

    export default login;
    




