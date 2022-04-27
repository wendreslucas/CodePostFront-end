import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Home from './pages/Home'
import Posts from './pages/Posts'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  )
}

export default App
