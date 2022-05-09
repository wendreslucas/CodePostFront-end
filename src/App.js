import React from 'react'
import { UserContextProvider } from './context/UserContext'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './components/Ui/GlobalStyle'
import { PostContextProvider } from './context/PostContext'
import { BrowserRouter } from 'react-router-dom'
import { SettingContextProvider } from './context/SettingContext'
import { PagesRoot } from './pages/Root'

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <SettingContextProvider>
          <PostContextProvider>
            <GlobalStyle />
            <PagesRoot />
          </PostContextProvider>
        </SettingContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
