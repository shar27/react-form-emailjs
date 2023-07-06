import React from 'react'
import axios from 'axios'
import { signOut, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase/Firebase'
import LogOutContent from '../components/LogOutContent'
import {useState, useEffect} from 'react'

function LogInContent({value, setValue}) {

  const [data, setData] = useState([])  
  const [isLoading, setLoading] = useState(false)
  const [search, setSearch ] = useState("")

  const handleLogOut = () => {
    signOut(auth).then(()=> {
    localStorage.clear('email')
   console.log("sign out success");
   window.location.reload(false);
  
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
   
 axios.get('https://dummyjson.com/posts')
   .then((response) =>{
    setData(response.data.posts)
   
   });
  }, [])
  
  
useEffect(() => {
  setValue(localStorage.getItem('email'))
  })
  
  const handleChange = (e) => {
    setSearch(e.target.value)
}

  console.log(data); 
 

  return (
    <div>
      
   <section className="float-end">
    <button className="bg-primary text-white" onClick={handleLogOut}>Sign out</button>
   </section>
   <section className='d-flex justify-content-center'>
    <input
    className='w-100 p-3'
    value={search}
    onChange={handleChange}
    placeholder='search...'
    />
   </section>
     {value?    
     
     
  //    .filter((val) => {
  //     if(search ===  ""){
  //         return val 
  //     } else if (val.title.toLowerCase().includes(search.toLowerCase())
  //     ){
  //     return val    
  //     }
  // })
     
     data.map((d, idx)=> (


<div key={idx} className='container'>
   <div className='row'>
    
        <div className='col'>
        <h3>{d.title}</h3>
        <p>{d.body.slice(0,100)}</p>
        <p className='fw-bold text-primary'>{d.tags.join(' , ').toUpperCase(0,1)}</p>
  </div>

      </div>
      </div>

     
     )): <LogOutContent/>}
     
      </div>
    
  )
}

export default LogInContent