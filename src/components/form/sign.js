import React from 'react'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { isAuthentication } from '../redux/slice'
import { uploadDetails } from '../redux/slice'

import './form.css'

const Sign = () => {
    const state=useSelector((data)=>data.sample)
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [conformpass , setConformpass] = useState('');
    const [email , setEmail]=useState('');
    const [address , setAddress] = useState('');
    const [number , setNumber] = useState('');
    const [gender , setGenter] = useState('');
    const [dob , setDob] = useState('');
    const [pincode , setPincode] = useState('');

    const setupUsername = (e) =>{
        let getId=document.getElementById('name-error');
        getId.style.visibility='hidden';
        setUsername(e);
    }
    const setupEmail = (e) =>{
        let getId = document.getElementById('email-error');
        getId.style.visibility='hidden';
        setEmail(e);
    }
    const setupDob = (e) =>{
        let getId = document.getElementById('dob-error');
        getId.style.visibility='hidden';
        setDob(e);
    }
    const setupAddress = (e) =>{
        let getId = document.getElementById('address-error');
        getId.style.visibility='hidden';
        setAddress(e);
    }
    const setupPincode = (e) =>{
        let getId = document.getElementById('pincode-error');
        getId.style.visibility='hidden';
        setPincode(e);
    }
    const setupNumber = (e) =>{
        let getId = document.getElementById('number-error');
        getId.style.visibility='hidden';
        setNumber(e);
    }
    const setupPassword = (e) =>{
        let getId = document.getElementById('pass-error');
        getId.style.visibility='hidden';
        setPassword(e);
    }
    const setupConformpass = (e) =>{
        let err=document.getElementById('error');
        err.style.visibility='hidden';
        setConformpass(e);
    }
    const setupGenter = (e) =>{
        let getId = document.getElementById('gender-error');
        getId.style.visibility='hidden';
        setGenter(e);
    }

    const dispatch = useDispatch();
    const formSubmit = ()=>{
        if(username === "" || password === "" || email ==="" || address === "" || number === "" || gender === "" || dob === "" || pincode === ""){
            if(username === ""){
                let getId=document.getElementById('name-error');
                getId.style.visibility='visible';
            }
            else{
                let getId=document.getElementById('name-error');
                getId.style.visibility='hidden';
            }
            if(password === ""){   
                let getId = document.getElementById('pass-error');
                getId.style.visibility='visible';
            }
            else{
                let getId = document.getElementById('pass-error');
                getId.style.visibility='hidden';
            }
            if(email === ""){   
                let getId = document.getElementById('email-error');
                getId.innerText='Enter Email';
                getId.style.visibility='visible';
            }
            else{
                let getId = document.getElementById('email-error');
                getId.style.visibility='hidden';
            }
            if(address === ""){
                let getId = document.getElementById('address-error');
                getId.style.visibility='visible';
            }
            else{
                let getId = document.getElementById('address-error');
                getId.style.visibility='hidden';
            }
            if(number === ""){
                let getId = document.getElementById('number-error');
                getId.style.visibility='visible';
            }
            else{
                let getId = document.getElementById('number-error');
                getId.style.visibility='hidden';
            }
            if(dob === ""){
                let getId = document.getElementById('dob-error');
                getId.style.visibility='visible';
            }
            else{
                let getId = document.getElementById('dob-error');
                getId.style.visibility='hidden';
            }
            if(gender === ""){
                let getId = document.getElementById('gender-error');
                getId.style.visibility='visible';
            }
            else{
                let getId = document.getElementById('gender-error');
                getId.style.visibility='hidden';
            }
            if(pincode === ""){
                let getId = document.getElementById('pincode-error');
                getId.style.visibility='visible';
            }
            else{
                let getId = document.getElementById('pincode-error');
                getId.style.visibility='hidden';
            }

        }
        else{
            let all = document.querySelectorAll("span");
            for(let i = 0 ; i < all.length ; i++){
                all[i].style.visibility='hidden';
            }
            let condition = '@gmail.com'
            if(email.match(condition)){
                let getId = document.getElementById('email-error');
                getId.style.visibility='hidden';
                if(number.length !== 10){
                    let getId = document.getElementById('number-error');
                    getId.style.visibility='visible';
                    getId.innerText="Valid number";
                }
                else{
                    if(password !== conformpass){
                        let err=document.getElementById('error');
                        err.style.visibility='visible';
                    }
                    else{
                        localStorage.setItem('mailid',email);
                        localStorage.setItem('password',conformpass);
                        localStorage.setItem("isAuthentication", JSON.stringify(true));
                        localStorage.setItem("username" , username);
                        localStorage.setItem("address" , address);
                        localStorage.setItem("number" , number);
                        localStorage.setItem("gender" , gender);
                        localStorage.setItem("dob", dob);
                        localStorage.setItem('pincode', pincode);
                        dispatch(isAuthentication());
                        dispatch(uploadDetails());
                        console.log("perfect");
                    }
                }
            }
            else{
                let getId = document.getElementById('email-error');
                getId.innerText="Invalid @gmail.com"
                getId.style.visibility='visible';
            }
        }              
    }

  return (
    <div className='form-sec'>
        <div className='user-form'>
            <div className='header'>
                <h2>Register Form</h2>
            </div>
            <form className='form'>
                <div className='user-form-control'>
                    <div>
                        <label for='username'>UserName</label>
                        <input type='text' placeholder='Enter Name' id='username' onChange={(e)=>setupUsername(e.target.value)}/>
                        <span id='name-error'>Enter Name</span>
                    </div>
                </div>

                <div className='user-form-control'>
                    <div>
                        <label for='useremail'>Enter Email</label>
                        <input type='email' placeholder='Enter Email' id='useremail' onChange={(e)=>setupEmail(e.target.value)}/>
                        <span id='email-error'>Invalid Email</span>
                    </div>
                </div>
                <div className='user-form-control'>
                    <div>
                        <label for='userdate'>Enter DOB</label>
                        <input type='date' placeholder='Date of Birth' id='userdate' onChange={(e)=>setupDob(e.target.value)}/>
                        <span id='dob-error'>Enter DOB</span>
                    </div>
                </div>
                <div className='user-form-control'>
                    <div>
                        <label for='useraddress'>Address</label>
                        <input type='text' placeholder='Enter Address' id='useraddress' onChange={(e)=>setupAddress(e.target.value)}/>
                        <span id='address-error'>Enter Address</span>
                    </div>
                </div>
                <div className='user-form-control'>
                    <div>
                        <label for='userpincode'>Pincode</label>
                        <input type='number' placeholder='Enter Pincode' id='userpincode' onChange={(e)=>setupPincode(e.target.value)}/>
                        <span id='pincode-error'>Enter Pincode</span>
                    </div>
                </div>
                <div className='user-form-control'>
                    <div>
                        <label for='usernumber'>Contact Number</label>
                        <input type='number' placeholder='Enter Number' id='usernumber' maxLength={10} onChange={(e)=>setupNumber(e.target.value)}/>
                        <span id='number-error'>Enter Number</span>
                    </div>
                </div>

                <div className='user-form-control'>
                    <div>
                        <label for='userpassword'>Password</label>
                        <input type='password' placeholder='Enter Password' id='userpassword' onChange={(e)=>setupPassword(e.target.value)}/>
                        <span id='pass-error'>Enter password</span>
                    </div>
                </div>
                <div className='user-form-control'>
                    <div>
                        <label for='conformpass'>Conform Password</label>
                        <input type='password' placeholder='Conform Password' id='conformpass' onChange={(e)=>setupConformpass(e.target.value)}/>
                        <span id='error'>Enter Correct Password</span>
                    </div>
                </div>
                <div className=''>
                    <div className='gender'>
                        <label>Gender</label>
                        <div>
                            <input type='radio' name='gender' value='male' onChange={(e)=>setupGenter(e.target.value)}/>
                            <label>Male</label>
                            <input type='radio' name='gender' value='female' onChange={(e)=>setupGenter(e.target.value)}/>
                            <label>Female</label>
                            <input type='radio' name='gender' value='transgender' onChange={(e)=>setupGenter(e.target.value)}/>
                            <label>transgender</label>
                        </div>
                        <span id='gender-error'>Select Genter</span>
                    </div>
                </div>
                <button type="button" onClick={()=>formSubmit()}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Sign