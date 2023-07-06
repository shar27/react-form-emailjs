import React from 'react'
import {auth, provider} from '../firebase/Firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useState, useEffect } from 'react'

export default function LogOutContent({value, setValue}) {
 
  const handleLogin = () => {
    signInWithPopup(auth,provider).then((data) => {
     setValue(data.user.email)
     localStorage.setItem("email", data.user.email)
    
    })
   }


  return (
    <div>
      
      <h1>You have logged out, please log back in to see your profile.</h1>

    <div>
      <button 
      onClick={handleLogin}
      className='btn-primary'>Sign Back In </button>
    </div>

    </div>
  )
}
