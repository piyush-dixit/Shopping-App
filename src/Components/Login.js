import React from 'react'
import { Navigation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {

const navigate=useNavigate()

    const [checkmail,SetNewmail]=useState('');
    const [checkpassword,SetNewpassword]=useState('');
    // const [login,Setlogin]=useState(0);
    // localStorage.setItem("logincheck",login)  
      const warning=()=>{
        
        if(checkmail===localStorage.getItem("emailData") && checkpassword===localStorage.getItem("passwordData")){
          // Setlogin(1)
          localStorage.setItem("logincheck","active")      
          alert("you are Login")
                navigate("/HomePage")
        }
           else
           alert("wrong password or need to register ")     
      }
    const emailsize=(event)=>{
      SetNewmail(event.target.value)
  
    
    }
    const passwordsize=(event)=>{
      SetNewpassword(event.target.value)
    
    }
    return (
     <>
  
     
    <div className="login">
  <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
    <li className="nav-item clr" role="presentation">
      <Link className="nav-link  my-"  data-mdb-toggle="pill" to="/Login" role="tab"
        aria-controls="pills-login" aria-selected="true">Login</Link>
    </li>
    <li className="nav-item clr" role="presentation">
      <Link className="nav-link active my-" data-mdb-toggle="pill" to="/Register" role="tab"
        aria-controls="pills-register" aria-selected="true">Register</Link>
    </li>
  </ul>
  
  
  
  <div className="container">
    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
      <form>
        <div className="welcome">
        <h2>Sign in Please:</h2>
        </div>
         <div className="form-outline mb-2">
          <label className="form-label" htmlFor="loginName">Email or username</label>
          <input type="email" id="loginName" className="form-control" placeholder="Enter mail" onChange={emailsize
      }/>
        </div>
        
  <div className="form-outline mb-2">
          <label className="form-label" htmlFor="loginPassword">Password</label>
          <input type="password" id="loginPassword" className="form-control" placeholder="Enter Passwoord"onChange={passwordsize}/>
        </div>
  <div className="row mb-2">
          
            
            
  
         
           
            <Link to="/Forgetpassword">Forgot password?</Link>
          </div>
       
       
        <button type="submit" className="btn btn-primary btn-block  cardImg mb-2" onClick={warning}>Sign in</button>
  
        
        <div className="text-center">
          <h3>Not a member ? <Link to="/Register" style={{color:"red"}}>Register</Link></h3>
        </div>
      </form>
     
    </div>
    
  </div>
  <hr></hr>
  {/* <div className="homepage mx-3" style={{textAlign:"center"}}>
<h1>Do you Know Why we Needed to Login ?</h1>
<p>  when you login on an online retail site, merchants can add you to their customer database. On the surface, this capability seems to exclusively benefit the merchant, who can utilize your information to market items directly to you, to try to encourage you to make future purchases.</p>
<p>But the option to register on a retail site doesn’t just give the retailer an advantage, it’s also a way for retailers to improve your future shopping experiences at their online store. When you register on a site, you give retailers the tools to personalize your shopping experience based on the data they draw from your purchase and browsing history. For example, Amazon remembers your browsing and purchase history and uses this information to power its recommendations feature – so the next time you’re browsing Amazon for your next read, Amazon can direct you to books you might enjoy.</p>

    </div> */}
    </div>
  </>
    
  )
}
