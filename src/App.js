import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  )
}

export default App
