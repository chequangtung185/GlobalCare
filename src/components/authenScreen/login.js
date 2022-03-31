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
                        
                        <div className="inputField">
                            <div className="username"> 
                                <p className="text-h3">Tên đăng nhập</p>
                                <input className="inputtext" type='text' placeholder='Tên đăng nhập (*)'/>
                            </div>
                           
                           <div className="password">
                                <p className="text-h3">Mật khẩu</p>
                                <input className="input_password" type='password' placeholder='Nhập mật khẩu (*)'/>
                           </div>
                            
                            <br/>
                            <div className="forgotpass">
                                <a  href="https://www.google.com/">Quên mật khẩu ?</a><br></br>
                            </div>
                            
                        </div>
                        <div className="btn-link">  

                           <Link to="/register" className="register">Đăng ký tài khoản</Link>
                           

                            <button className="btn-show">Tiếp theo</button>
                        </div>
                    </form>
                </div>           
            </div>

        );
      }

    }

    export default login;
    




