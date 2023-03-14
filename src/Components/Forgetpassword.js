import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Forgetpassword() {
  const navigate=useNavigate();
    const [checkmail,Setcheckmail]=useState(' ');
    const OTP=(event)=>{
    event.preventDefault()
     if (checkmail.length > 0 && checkmail===localStorage.getItem("emailData")) {
        alert("Keep smile Your Password is save  :");
        navigate("/Resetpassword");
        
      
      }else {
        alert("'email does not exist'");
      }
    }
    
    const emailsize=(event)=>{
        Setcheckmail(event.target.value)
      
      }
  return (
    <>
   
<div className="welcome">
<h3>Enter your mail to know Your Password</h3>
</div>

    <form className="container"  onSubmit={OTP}>
    
    <div className="col-auto">
      <label htmlFor="inputPassword2" className="visually-hidden">Email</label>
      <input type="Email" className="form-control mb-3 mx-3" id="inputPassword2" onChange={emailsize}  placeholder="Enter email" required/>
    </div>
    <div className="welcome">
      <button type="submit" className="btn btn-primary mb-3"  >See password</button>
    </div>
  </form>
  </>
  )
}