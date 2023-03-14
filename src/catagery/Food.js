import React from 'react'
import food1 from "/home/piyush/shopping-app/src/Photos/food1.jpeg"
import food2 from "/home/piyush/shopping-app/src/Photos/food2.jpeg"
import food3 from "/home/piyush/shopping-app/src/Photos/food3.jpeg"
import food4 from "/home/piyush/shopping-app/src/Photos/food4.jpeg"
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Addcart } from '../Store/Info';


export default function Food () {
const Dispatch=useDispatch()
  const ss=localStorage.getItem("additem")
  const[count,Setcount]=useState(+ss);
  localStorage.setItem("additem",count)
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
   <h2 style={{textAlign:'center',color:'blue',backgroundColor:'yellow'}}>Chosse Your Items</h2>
  <hr />
  <body>
<div className="cardcat" style={{backgroundColor:'yellow'}}>
  <img src={food1} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Twa-Rati</h1>
  <p className="price">1 Item = $19.99/-</p>
 <p><button onClick={additem}>Add to Cart</button></p>
 <button onClick={removeitem}>Remove Item</button>
</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow' }}>
  <img src={food2} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Burger</h1>
  <p className="price">1 Item = $19.99/-</p>
  <p><button onClick={additem}>Add to Cart</button></p>
  <button onClick={removeitem}>Remove Item</button>
</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow'}}>
  <img src={food3} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Noddels</h1>
  <p className="price">1 Item = $19.99/-</p>
 <p><button onClick={additem}>Add to Cart</button></p>
 <button onClick={removeitem}>Remove Item</button>
</div>
</body>
<hr />
<body>
<div className="cardcat" style={{backgroundColor:'yellow'}}>
  <img src={food4} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Pasta</h1>
  <p className="price">1 Item = $19.99/-</p>
<p><button onClick={additem}>Add to Cart</button></p>
<button onClick={removeitem}>Remove Item</button>
</div>
</body>
</>
  )
}
