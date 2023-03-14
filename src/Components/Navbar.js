import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddEmail } from '../Store/Info';

export default function Navbar() {
    const navigate=useNavigate()
    const Dispatch = useDispatch();
    const Selector = useSelector(state=>state.EmailId.email);
    const Selector2 = useSelector(state=>state.Cart.addtocart);
    

    const indb=()=>{
      navigate("/Register")
}
const indb2=()=>{
      
  navigate("/Login")
}
    const outdb=()=>{
      alert("LogOut Sccessfully")
        localStorage.clear();
        localStorage.removeItem("passwordData");
        navigate("/")
}
const totalorder=()=>{
  navigate("/Order")
}
  return (
    <>
    <div className="striky">
  <div className="navy">
   <nav className="navbar navbar-expand-lg bg-body-tertiar">
  <div className="container-fluid">
    {localStorage.getItem("emailData")!==null ? <Link className="navbar-brand cart" to="/HomePage">Shopping-App</Link> :<Link className="navbar-brand cart" to="/">Shopping-App</Link>}
    
   
 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 {localStorage.getItem("logincheck")!==null?  <li><button  type="button"className="button mx-3"onClick={outdb}><span>LogOut</span></button></li>
 :   <><li><button type="button" className="button mx-3 my-3" onClick={indb}><span>Register</span></button></li>
 <li><button type="button" className="button mx-3 my-3" onClick={indb2}><span>Login</span></button></li>
</>
}
</ul>
     </div>
     {/* {Selector} */}

 <div className="user" style={{textAlign:'center'}}>
  {localStorage.getItem("logincheck")===null ?   <img alt="" src="/home/piyush/shopping-app/src/Photos/icons8-add-shopping-cart-30.png"  />
 :<>
 <h6  >Login Email Id is: {localStorage.getItem("emailData")}</h6>
  <button className="button"  onClick={totalorder}><span>items :{localStorage.getItem("additem")}</span></button>
 </>}
  
</div>
 {/* {Selector2} */}
</nav>
</div>
</div>
</>
  )
}