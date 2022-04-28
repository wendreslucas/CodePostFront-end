import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../Login'
import Home from '../Home'
import Main from '../Main'
import Posts from '../Posts'

export const PagesRoot = () => (
  <Routes>
    <Route exact path="/" element={<Login />} />
    <Route exact path="/home" element={<Home />} />
    <Route path="/main" element={<Main />} />
    <Route path="/posts" element={<Posts />} />
  </Routes>
)
