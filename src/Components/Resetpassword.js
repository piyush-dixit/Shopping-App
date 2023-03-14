import React from 'react'

export default function Resetpassword() {
  return (
    <body>
        <div className='setpassword'>
 <h1>your password is : {localStorage.getItem("passwordData")}</h1>
 <p>please copy is password</p>
        </div>
    </body>
  )
}
