import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { AddEmail } from '../Store/Info';
import Forgetpassword from './Forgetpassword';
const getEmail=localStorage.getItem("emailData")
const getPassword=localStorage.getItem("passwordData")


export default function Register() {
    const navigate=useNavigate()
    const Dispatch = useDispatch();
    
    const [checkmail,SetNewmail]=useState('');
    const [checkpassword,SetNewpassword]=useState('');
    const [name,Setname]=useState('');
    const [address,Setaddress]=useState('');
    const warning=()=>{
        if(checkmail.includes("@gmail.com")>0 && checkpassword.length>8 && name.length>4 && address.length>4  ){
        localStorage.setItem("emailData",checkmail)
        localStorage.setItem("passwordData",checkpassword)
        localStorage.setItem("nameData",name)
        localStorage.setItem("addressData",address)
        alert("User registerd")
        Dispatch(AddEmail(checkmail))
        navigate("/Login")
        }
      else{
      alert("Please Fill up All  Fileds")
       }
    }
    const emailsize=(event)=>{
      SetNewmail(event.target.value)

    
    }
    const passwordsize=(event)=>{
      SetNewpassword(event.target.value)
    
    }
    const checkname=(event)=>{
      Setname(event.target.value)
    
    }
    const checkAddress=(event)=>{
      Setaddress(event.target.value)
    
    }
   
    return (
    
        <>
        <div className="register">
        <div className="welcome"> 
        <h1>Register here</h1>
        </div>
        <form className="container" >
        <div className="form-group mb-2">
           
           <label className="form-label" htmlFor="loginName">Custumes's Name</label>
           <input type="Text" id="loginName" className="form-control"  onChange={checkname}  placeholder="Enter name" required/>
         </div>
         <div className="form-group mb-2">
           
           <label className="form-label" htmlFor="loginName">Custumer's Address</label>
           <input type="Text" id="loginName" className="form-control"  onChange={checkAddress} placeholder="Enter  Address" />
         </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email.id</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={emailsize} placeholder="Enter email" required/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1 my-3">Password</label>
        <input type="password" className="form-control" id="pwd" onChange={passwordsize} placeholder=" Enter a Strong Password" required/>
      </div>
      {/*  */}
      <div className="d-grid gap-2 col-6 mx-auto my-3">
      <button className="btn btn-primary " type="submit" onClick={warning}>Sign Up Here</button>
    </div>
    </form>
    <hr></hr>
  

    </div>
      </>
  )
}
