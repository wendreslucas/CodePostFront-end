import React from 'react'
import App from './App'
import { UserContextProvider } from './context/UserContext'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './components/Ui/GlobalStyle'
import { PostContextProvider } from './context/PostContext'
import { BrowserRouter } from 'react-router-dom'
import { SettingContextProvider } from './context/SettingContext'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <BrowserRouter>
    <UserContextProvider>
      <SettingContextProvider>
        <PostContextProvider>
          <GlobalStyle />
          <App />
        </PostContextProvider>
      </SettingContextProvider>
    </UserContextProvider>
  </BrowserRouter>
)
