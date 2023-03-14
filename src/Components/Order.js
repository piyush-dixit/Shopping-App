import React from 'react'
import orderpic from "/home/piyush/shopping-app/src/Photos/order2.jpg"
import { useNavigate } from 'react-router-dom'

export default function Order() {
  const navigate=useNavigate();
    const goto=()=>{
        alert("Your order will be delivered Thanku For Shopping ")
        
        navigate("/HomePage")
    }
  return (
    <>
  <body>
<div className="cardcat" style={{backgroundColor:'white'}}>
  <img src={orderpic} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>{localStorage.getItem("nameData")}</h1>
  <p className="price">Address:{localStorage.getItem("addressData")}</p>
  <p className="price"> Your Total Item is:  {localStorage.getItem("additem")}</p>
<p className="price"> Your Total Amount is: $ {+localStorage.getItem("additem")*19}/-</p>
  <p><button  className="button"onClick={goto}><span>Checkout</span></button></p>
</div>
</body>


    </>
  )
}
