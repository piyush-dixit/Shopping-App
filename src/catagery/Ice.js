import React from 'react'
import ice1 from "/home/piyush/shopping-app/src/Photos/ICE1.jpeg"
import ice2 from "/home/piyush/shopping-app/src/Photos/ICE2.jpeg"
import ice3 from "/home/piyush/shopping-app/src/Photos/ICE5.jpeg"
import ice4 from "/home/piyush/shopping-app/src/Photos/ICE4.jpeg"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Addcart } from '../Store/Info';



export default function  Ice() {
 
    const Dispatch = useDispatch();
    const ss2=localStorage.getItem("additem")
    const [count,Setcount]=useState(0);
    

    const additem=()=>{
    Setcount(count+1)
    localStorage.setItem("additem",count)
    Dispatch(Addcart(count))

    }
    const removeitem=()=>{
      if(count>0)
      Setcount(count-1)
      localStorage.setItem("additem",count)
          Dispatch(Addcart(count))
      
      
        }
   
  return (
    <>
<h2 style={{textAlign:'center',color:'blue',backgroundColor:'yellow'}}>Choose Items</h2>
  <hr />
  <body>
<div className="cardcat" style={{backgroundColor:'yellow'}}>
  <img src={ice1} alt="Denim Jeans" style={{width:"60%"}}/>
  <h1>Cone</h1>
  <p className="price">1 Item = $19.99/-</p>
 <p><button   onClick={additem} >Add to Cart</button></p>
 {/* <button onClick={removeitem}>remove item</button> */}
</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow' }}>
  <img src={ice2} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Pink Cone</h1>
  <p className="price">1 Item = $19.99/-</p>
  <p><button onClick={additem}>Add to Cart</button></p>
  {/* <button onClick={removeitem}>remove item</button> */}
</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow'}}>
  <img src={ice3} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Chocolate</h1>
  <p className="price">1 Item = $19.99/-</p>
 <p><button onClick={additem}>Add to Cart</button></p>
 {/* <button onClick={removeitem}>remove item</button> */}
</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow'}}>
  <img src={ice4} alt="Denim Jeans" style={{width:"60%"}}/>
  <h1>Vanilla</h1>
  <p className="price">1 Item = $19.99/-</p>
<p><button onClick={additem}>Add to Cart</button></p>
{/* <button onClick={removeitem}>remove item</button> */}
</div>
</body>

</>
  )
}
