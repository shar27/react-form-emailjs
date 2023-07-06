import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Posts from './pages/Posts'
import Home from './pages/Home'
import Signup from './pages/Signup'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/Posts" element={<Posts/>} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="Signup" element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default App