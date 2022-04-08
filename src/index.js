import React from 'react'
import App from './App'
import { UserContextProvider } from './context/UserContext'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './components/Ui/GlobalStyle'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <UserContextProvider>
    <GlobalStyle />
    <App />
  </UserContextProvider>
)
