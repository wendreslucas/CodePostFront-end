import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext'

export const SettingContext = createContext()

export function SettingContextProvider({ children }) {
  const navigate = useNavigate()
  const { userName, setUserName } = useContext(UserContext)
  const [openMenuUser, setOpenMenuUser] = useState(false)
  const [openNav, setOpenNav] = useState(false)

  function handleNovoPost() {
    setOpenNav(false)
    navigate('/main')
  }

  function handlePosts() {
    setOpenNav(false)
    navigate('/posts')
  }

  function handleHome() {
    setOpenNav(false)
    navigate('/home')
  }

  function handleLogout() {
    setOpenMenuUser(false)
    navigate('/')
  }

  function handleProfile() {
    setOpenMenuUser(false)
    window.open(`https://github.com/${userName}`, '_blank')
  }

  function handleAbout() {
    window.open('https://github.com/wendreslucas', '_blank')
  }

  return (
    <SettingContext.Provider
      value={{
        handleNovoPost,
        handlePosts,
        handleHome,
        handleLogout,
        handleProfile,
        handleAbout
      }}
    >
      {children}
    </SettingContext.Provider>
  )
}
