import React, { Component, useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import logo from '../assets/images/logoglobalcare.png';
import logo1 from '../assets/images/logoregister1.png';
import logo2 from '../assets/images/logoregister2.png';
import logo3 from '../assets/images/logoregister3.png';
import './login_register.css';

function Register(){  
        return (
            <div className="container_register">
                
                <div className="form-register">
                    <form > 
                        <div className="imagelogoReg">
                            <img src={logo} />   
                        </div>    
                        <div>
                            <p className="titleRegister">Đăng Ký Tài Khoản GlobalCare</p>
                        </div>                          
                        <div className="row-input">
                            <input className="input-register" type='text' placeholder='Tên đăng nhập (*)'/>
                            <input className="input-register" type='password' placeholder='Mật khẩu'/>
                        </div>
                        <div className="row-input">
                            <input className="input-register-mail" id="register-mail" type='text' placeholder='example@email.com'/>
                        </div>
                        <div className="row-input">
                            <input className="input-register" type='text' placeholder='Họ (*)'/>
                            <input className="input-register" type='text' placeholder='Tên (*)'/> 
                        </div>
                        <div className="row-input">
                            <input className="input-register" type='text' placeholder='Chứng minh thư (*)'/>
                            <input className="input-register" type='text' placeholder='Số điện thoại (*)'/> 
                        </div>
                        <div className="row-input-robot">
                            <div>
                            <InputGroup className="mb-3" >
                                <InputGroup.Text id="math"> 3 + 5 = </InputGroup.Text>
                                <FormControl className="input-register-robot" 
                                                type="text"
                                                size="lg"
                                                aria-label="With textarea"  
                                                aria-describedby="math"
                                                placeholder='Bạn không phải là robot?' />
                            </InputGroup>
                            </div>
                            <div className="image3">
                                <img src={logo1}/>
                                <img src={logo2}/>  
                                <img src={logo3}/> 
                            </div>                     
                        </div>
                        <div className="btn-link-2">
                            <button className="btn-cancle">Hủy</button>
                            <button className="btn-register">Đăng ký tài khoản</button>
                        </div>
                    </form>
                </div>           
            </div>

        );

    }

    export default Register;
    




