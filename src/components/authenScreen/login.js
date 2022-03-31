import React, { useState } from "react";
import logo from '../assets/images/logoglobalcare.png'
import './login_register.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    useNavigate
  } from "react-router-dom";
import Register from "./register";

function Login(){
    let navigate = useNavigate();
    const [user, setUser] = useState({ username: "", password: "" });
    
    //test user
    const adminUser={
        name: "user1",
        pass: "user123"
    };

    function submitHandler(e) {
        e.preventDefault();
        if (user.username == "" && user.password == "") {
            alert("Vui lòng điền username và password");
        }else if (user.username == adminUser.name && user.password == adminUser.pass){
            alert("Đăng nhập thành công");
            navigate("/home");

        } else {
            alert('Đăng nhập thất bại');
        }
        
      }
    //render(){
        return (
            <div className="container">
                
                <div className="formlogin">
                    <form onSubmit={submitHandler}> 
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
                                <input className="inputtext" type='text' placeholder='Tên đăng nhập (*)' 
                                onChange={(e) => setUser({ ...user, username: e.target.value })}/>
                            </div>
                           
                           <div className="password">
                                <p className="text-h3">Mật khẩu</p>
                                <input className="input_password" type='password' placeholder='Nhập mật khẩu (*)'
                                onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                           </div>
                            
                            <br/>
                            <div className="forgotpass">
                                <a  href="https://www.google.com/">Quên mật khẩu ?</a><br></br>
                            </div>
                            
                        </div>
                        <div className="btn-link">  

                           <Link to="/register" className="register">Đăng ký tài khoản</Link>
                           

                            <input type="submit" className="btn-show" value={"Tiếp theo"}></input>
                        </div>
                    </form>
                </div>           
            </div>

        );
      }


    export default Login;
    




