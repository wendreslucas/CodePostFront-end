import React from 'react'
import App from './App'
import { UserContextProvider } from './context/UserContext'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './components/Ui/GlobalStyle'
import { PostContextProvider } from './context/PostContext'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <BrowserRouter>
    <UserContextProvider>
      <PostContextProvider>
        <GlobalStyle />
        <App />
      </PostContextProvider>
    </UserContextProvider>
  </BrowserRouter>
)
