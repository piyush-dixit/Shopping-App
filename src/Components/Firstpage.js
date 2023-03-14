import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import shop from "/home/piyush/shopping-app/src/Photos/shop page.jpg"

export default function Firstpage() {
    const navigate=useNavigate()
const click=()=>{
         navigate("/HomePage")
}
  return (
    <>
    <body>
      <div className="pic" >
<div className="firstpage">
    <button type="button"  onClick={click} class="btn-change6">Click Me For Start</button>
    </div>
    </div>
    </body>
    </>
  )
}
