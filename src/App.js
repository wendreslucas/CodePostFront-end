import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        {/* <Route path="/posts" element={<Posts />} /> */}
        <Route
          path="/edit"
          render={props => <EditPost {...props} updatePost={updatePost} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
