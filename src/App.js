import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
// import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home'
import Posts from './pages/Posts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
