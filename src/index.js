import React from 'react'
import App from './App'
import { UserContextProvider } from './context/UserContext'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './components/Ui/GlobalStyle'
import { PostContextProvider } from './context/PostContext'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <UserContextProvider>
    <PostContextProvider>
      <GlobalStyle />
      <App />
    </PostContextProvider>
  </UserContextProvider>
)
