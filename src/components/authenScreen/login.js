import React, { Component, useState, useEffect } from "react";
import logo from '../assets/images/logoglobalcare.png'
import './login_register.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    useNavigate  } from "react-router-dom";
import { createBrowserHistory } from "history";

const Login = (props)=>{

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(false);


    let navigate = useNavigate();

    const initialValues = {tendn: "", mk: "", email: "", ho: "", ten: "", cmt: "", sdt: ""};
    const [formValues, setFormValues] = useState(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        // setErrors(validate(formValues));          
        // if(Object.keys(formErrors).length === 0){
        //     alert("Đăng ký thành công <3");
            navigate("/home", { state: formValues });
        // } else {
        // alert("Đăng ký thất bại !!!");
        // }
    }

    // render(){
        return (
            <div className="container">
                
                <div className="formlogin">
                    <form onSubmit={handleSubmit}> 
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
                                <input 
                                    className="inputtext" 
                                    type='text' 
                                    placeholder='Tên đăng nhập (*)'
                                    onChange={(e)=>setUserName(e.target.value) }
                                    value={username}
                                    />
                            </div>
                           
                           <div className="password">
                                <p className="text-h3">Mật khẩu *</p>
                                <input 
                                    className="input_password" 
                                    type='password' 
                                    placeholder='Nhập mật khẩu (*)'
                                    onChange={(e)=>setPassword(e.target.value) }
                                    value={password}
                                    />
                           </div>
                            
                            <br/>
                            <div className="forgotpass">
                                <a  href="https://www.google.com/">Quên mật khẩu ?</a><br></br>
                            </div>
                            
                        </div>
                        {error && <div className="error">{error}</div>}
                        <div className="btn-link">  

                           <Link to="/register" className="register">Đăng ký tài khoản</Link>
                           

                            <button 
                                className="btn-show"
                                value={loading ? "loading..." : "login"}
                                disabled={loading}
                                type="submit"
                                >Tiếp theo</button>
                        </div>
                    </form>
                </div>           
            </div>

        );
    //   }

    }

    export default Login;
    




