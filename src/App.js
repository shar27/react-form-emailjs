import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import Home from './pages/Home'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/Posts" element={<Posts/>} />
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App