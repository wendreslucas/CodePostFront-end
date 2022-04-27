import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  )
}

export default App
