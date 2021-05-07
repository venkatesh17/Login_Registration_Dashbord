import React, { useEffect, useState} from "react";
import {useHistory } from "react-router-dom";
import axios from 'axios'
import '../css/login.css'


function Login() {

    const [login, setLogin] = useState({})
    let history = useHistory();

    const [data, setLoginData] = useState({username:"", password:"", repassword:"", mailid:""})

      const onChangeUserName = (e) =>{
        setLoginData({...data,username:e.target.value})
      }

      const onChangePassword =(e)=>{
        setLoginData({...data, password:e.target.value})
      }

      const onChangeEmail = (e)=>{
        setLoginData({...data, mailid:e.target.value})
      }

      const onChangeConPassword=(e)=>{
        setLoginData({...data, repassword:e.target.value})
      }
      const onLogin = async ()=>{
          history.push('/')
      }

    return(
    <>
        <div className="login_container">
            <div className="signup-container">
                <p className="login_title">Registration</p>
                <input className="email_value"
                       type="text"
                       name="username"
                       placeholder="Email"
                       onChange={onChangeUserName}
                 />
                 <input className="email_value"
                        type="text"
                        name="username"
                        placeholder="User Name"
                        onChange={onChangeEmail}
                  />
                <input className="password_value"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={onChangePassword}
                        />
                <input className="password_value"
                        type="password"
                        name="repassword"
                        placeholder="Confirm Password"
                        onChange={onChangeConPassword}
                        />
                <button className="btn btn-primary login_btn"
                        type="submit"
                        onClick={onLogin}
                >Signup</button>
            </div>
        </div>

    </>
    )
}

export default Login;
