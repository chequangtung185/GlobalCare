import React, { Component, useState, useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logoglobalcare.png';
import logo1 from '../assets/images/logoregister.png';
import './register.css';

function Register(){  

        let navigate = useNavigate();

        const initialValues = {tendn: "", mk: "", email: "", ho: "", ten: "", cmt: "", sdt: ""};
        const [formValues, setFormValues] = useState(initialValues);
        const [formErrors, setFormErrors] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);

        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormValues({ ...formValues, [name]: value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            setFormErrors(validate(formValues));  
            setIsSubmit(true);        
            if(Object.keys(formErrors).length === 0 && isSubmit){
                alert("Đăng ký thành công <3");
                navigate("/", { state: formValues });
            } else {
            alert("Đăng ký thất bại !!!");
            }
        }

        const validate = (values) => {
            const errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (!values.tendn){
                errors.tendn = "Không bỏ trống tên đăng nhập!";
            }
            if (!values.mk){
                errors.mk = "Không bỏ trống mật khẩu!";
            } else if (values.mk.length < 8 || values.mk.length > 15){
                errors.mk = "Mật khẩu phải gồm 8 đến 15 ký tự!";
            }
            if (!values.email){
                errors.email = "Không bỏ trống email!";
            } else if(!regex.test(values.email)){
                errors.email = "Đây không phải định dạng đúng của email!";
            }
            if (!values.ho){
                errors.ho = "Không bỏ trống họ!";
            }
            if (!values.ten){
                errors.ten = "Không bỏ trống tên!";
            }
            if (!values.cmt){
                errors.cmt = "Không bỏ trống chứng minh thư!";
            } else if(values.cmt.length == 9){
                errors.cmt = "Chứng minh thư Không chính xác"
            }
            if (!values.sdt){
                errors.sdt = "Không bỏ trống số điện thoại!";
            } else if(values.sdt.length === 10){
                errors.sdt = "Số điện thoại không đúng"
            }

            return errors;
        }

        return (
            <div className="container_register">
                <div className="form-register">
                    <form onSubmit={handleSubmit}> 
                        <div className="imagelogoReg">
                            <img src={logo} />   
                        </div>    
                        <div>
                            <h3 className="titleRegister">Đăng Ký Tài Khoản GlobalCare</h3>
                        </div>                          
                        <div className="row-input">
                            <div>
                                <input className="input-register" 
                                        type='text' 
                                        name="tendn" 
                                        placeholder='Tên đăng nhập (*)' 
                                        value={formValues.tendn} 
                                        onChange={handleChange} />
                                <p>{formErrors.tendn}</p>
                            </div>
                            <div>
                                <input className="input-register" 
                                        type='password' 
                                        name="mk" 
                                        placeholder='Mật khẩu' 
                                        value={formValues.mk} 
                                        onChange={handleChange}/>
                                <p>{formErrors.mk}</p>
                            </div>
                        </div>
                        <div className="row-input-email">
                            <div>
                                <input className="input-register-mail" 
                                        id="register-mail" 
                                        type='text' 
                                        name="email" 
                                        placeholder='example@email.com' 
                                        value={formValues.email} 
                                        onChange={handleChange}/> 
                            </div>  
                            <p>{formErrors.email}</p>           
                        </div>
                        <div className="row-input">
                            <div>
                                <input className="input-register" 
                                        type='text' 
                                        name="ho" 
                                        placeholder='Họ (*)' 
                                        value={formValues.ho} 
                                        onChange={handleChange}/>
                                <p>{formErrors.ho}</p>
                            </div>
                            <div>
                                <input className="input-register" 
                                        type='text' 
                                        name="ten" 
                                        placeholder='Tên (*)' 
                                        value={formValues.ten} 
                                        onChange={handleChange}/> 
                                <p>{formErrors.ten}</p>
                            </div>
                        </div>
                        <div className="row-input">
                            <div>
                                <input className="input-register" 
                                        type='text' 
                                        name="cmt" 
                                        placeholder='Chứng minh thư (*)' 
                                        value={formValues.cmt} 
                                        onChange={handleChange}/>
                                <p>{formErrors.cmt}</p>
                            </div>
                            <div>
                                <input className="input-register" 
                                        type='text' 
                                        name="sdt" 
                                        placeholder='Số điện thoại (*)' 
                                        value={formValues.sdt} 
                                        onChange={handleChange}/>
                                <p>{formErrors.sdt}</p>
                            </div>
                        </div>
                        <div className="row-input-robot">                         
                            <InputGroup className="mb-3" >
                                <InputGroup.Text id="math"> 3 + 5 = </InputGroup.Text>
                                <FormControl className="input-register-robot" 
                                                type="text"
                                                size="lg"
                                                aria-label="With textarea"  
                                                aria-describedby="math"
                                                placeholder='Bạn không phải là robot?'
                                               />
                            </InputGroup>
                            <img className="image3" src={logo1}/>
                        </div>
                        <div className="btn-link-2">
                            <Link to='/'>
                                <button type="button" className="btn-cancle">Hủy</button>
                            </Link>
                            <button type="submit" className="btn-register">Đăng ký tài khoản</button>
                        </div>
                    </form>
                </div>           
            </div>

        );

    }

    export default Register;
    




