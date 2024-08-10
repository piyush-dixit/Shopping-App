import React from 'react'
import { useSelector } from 'react-redux'
import { AddPassword } from '../Store/Info';

 const Resetpassword = () => 
 {
const Selector1=useSelector(state=>state.Password.password);
const Selector = useSelector(state=>state.EmailId.email);
  return (
    <body>
        <div className='setpassword'>
        <h1>your password is : {Selector1}</h1>
        <p>please copy is password</p>
        </div>
        </body>
  )
}



export default Resetpassword