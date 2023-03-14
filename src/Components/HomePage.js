import React from 'react'
import frt from "/home/piyush/shopping-app/src/Photos/fruitshome.jpg"
import veg from "/home/piyush/shopping-app/src/Photos/veg.jpg"
import food from "/home/piyush/shopping-app/src/Photos/fd2.jpg"
import ice from "/home/piyush/shopping-app/src/Photos/creame2.jpeg"
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

export default function HomePage() {
    const navigate=useNavigate()
    const checkloginveg=()=>{
if(localStorage.getItem("logincheck")!==null){
                navigate("/Veg")
}
else{
    alert("You need a Create Account or Login")
    navigate("/Login")
}

    }
    const checkloginfriut=()=>{
        if(localStorage.getItem("logincheck")!==null){
                        navigate("/Friut")
        }
        else{
            alert("You need a Create Account or Login")
            navigate("/Login")
        }
        
            }
            const checkloginfood=()=>{
                if(localStorage.getItem("logincheck")!==null){
                                navigate("/Food")
                }
                else{
                    alert("You need a Create Account or Login")
                    navigate("/Login")
                }
                
                    }
                    const checkloginice=()=>{
                        if(localStorage.getItem("logincheck")!==null){
                                        navigate("/Ice")
                        }
                        else{
                            alert("You need a Create Account or Login")
                            navigate("/Login")
                        }
                        
                            }

                            
  return (
    <>
    {/* ,position: '-webkit-sticky',
  position: 'sticky',
  bottom: '0' */}
<div >
<h1 style={{textAlign:'center',color:'blue',backgroundColor:'yellow'}}>Categories</h1>

<body>
  <div class="wrapper">
    <div class="product-img">
      <img src={food} height="420" width="327"/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>Food</h1>
        <h2>Pure Veg</h2>
      <p>
food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.</p>
      </div>
<div class="product-price-btn">
       
        <button  onClick={checkloginfood} className="button"><span>Go Order </span></button>
      </div>
    </div>
  </div>

</body>



<body>
  <div class="wrapper">
    <div class="product-img">
      <img src={veg} height="420" width="327"/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>Vegitables</h1>
        <h2>Pure Veg</h2>
      <p>
food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.</p>
      </div>
<div class="product-price-btn">
       
        <button  onClick={checkloginveg} className="button"><span>Go Order </span></button>
      </div>
    </div>
  </div>

</body>


<body>
  <div class="wrapper">
    <div class="product-img">
      <img src={frt} height="420" width="327"/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>Fruits</h1>
        <h2>Pure Veg</h2>
      <p>
food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.</p>
      </div>
<div class="product-price-btn">
       
        <button  onClick={checkloginfriut} className="button"><span>Go Order </span></button>
      </div>
    </div>
  </div>

</body>

<body>
  <div class="wrapper">
    <div class="product-img">
      <img src={ice} height="420" width="327"/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>Ice-Cream</h1>
        <h2>Pure Veg</h2>
      <p>
food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.</p>
      </div>
<div class="product-price-btn">
       
        <button  onClick={checkloginice} className="button"><span>Go Order </span></button>
      </div>
    </div>
  </div>

</body>
         
 </div>
 </>

  )
}
