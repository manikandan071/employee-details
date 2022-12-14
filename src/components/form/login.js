import React from 'react'

import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginAuthentication } from '../redux/slice';

const Login = () => {
    const [usermail , setUsermail] = useState('');
    const [password , setPassword] = useState('');

    const setupUsermail = (e) =>{
        let getId=document.getElementById('name-error');
        getId.style.visibility='hidden';
        setUsermail(e);
    }
    const setupPassword = (e) =>{
        let getId=document.getElementById('pass-error');
        getId.style.visibility='hidden';
        setPassword(e);
    }

    const dispatch = useDispatch();

    const userSubmit=()=>{
        let userEmail=localStorage.getItem('mailid');
        let userPassword = localStorage.getItem('password');

        if(userEmail !== usermail){
            let getId=document.getElementById('name-error');
            getId.style.visibility='visible';

            if(password !== userPassword){
                let getId=document.getElementById('pass-error');
                getId.style.visibility='visible';
            }
        }
        else{
            let getId=document.getElementById('name-error');
            getId.style.visibility='hidden';

            if(password !== userPassword){
                let getId=document.getElementById('pass-error');
                getId.style.visibility='visible';
            }
            else{
                let getId=document.getElementById('pass-error');
                getId.style.visibility='hidden';
                localStorage.setItem("loginAuthentication", JSON.stringify(true));
                dispatch(loginAuthentication());
            }
        }
    }
  return (
    <div className='form-sec'>
        <div className='user-form'>
            <div className='header'>
                <h2>Login</h2>
            </div>
            <form className='form'>
                <div className='user-form-control'>
                    <div>
                        <label>Enter Email</label>
                        <input type='email' placeholder='Email ID' id='username' onChange={(e)=>setupUsermail(e.target.value)}/>
                        <span id='name-error'>Invalid Email</span>
                    </div>
                </div>
                <div className='user-form-control'>
                    <div>
                        <label>Password</label>
                        <input type='password' placeholder='Enter Password' id='userpass' onChange={(e)=>setupPassword(e.target.value)}/>
                        <span id='pass-error'>Invalid Password</span>
                    </div>
                </div>
                <button className='login-btn' type="button" onClick={()=>userSubmit()}>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login