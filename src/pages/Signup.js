import React, { useEffect } from 'react'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/Firebase'
import LogInContent from '../components/LogInContent'
import LogOutContent from '../components/LogOutContent'



function Signup() {

const [value, setValue] = useState('')

const handleLogOut = () => {
  signOut(auth).then(()=> {
   console.log(value);
 console.log("sign out success");
 console.log(value);

  }).catch((error) => {
    console.log(error);
  })
}

useEffect(() => {
setValue(localStorage.getItem('email'))
})

    return (
    <div className='d-flex justify-content-center'>
          

      {value? <LogInContent
      value={value}
      setValue={setValue}
      handleLogOut={handleLogOut}

      /> : <LogOutContent
      handleLogOut={handleLogOut}
      value={value}
      setValue={setValue}
      />
 
  

}

    </div>
  )
}

export default Signup