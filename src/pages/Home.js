import React from 'react'
import {useState} from 'react'
import Login from '../components/Login'
import Logout from '../components/Logout'
import LogInContent from '../components/LogInContent'
import LogOutContent from '../components/LogOutContent'
import { ContactForm } from '../components/ContactForm'

function Home() {
    const [isLoggedin, setIsLoggedIn] = useState(<Login/>)
    const [show, setShow] = useState(<LogInContent/>)

    function handleChange (){
        setIsLoggedIn(!isLoggedin)
        setShow(!show)
    }

  return (
    <div className='p2'>
        
        <div className='flex-end'>
        <button
        className='btn-red'
        onClick={handleChange}
        >{isLoggedin? <Login/> : <Logout/>}</button>
        </div>

        <div className='flex-center p5'>
            {show? <LogOutContent/> : <LogInContent/>}
        </div>
        <div>
            <ContactForm/>
        </div>
        </div>
  )
}

export default Home