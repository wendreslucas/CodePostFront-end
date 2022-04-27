import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext'

export const SettingContext = createContext()

export function SettingContextProvider({ children }) {
  const navigate = useNavigate()
  const { userName, setUserName } = useContext(UserContext)
  const [openMenuUser, setOpenMenuUser] = useState(false)

  function handleLogout() {
    setOpenMenuUser(false)
    navigate('/')
  }

  function handleProfile() {
    setOpenMenuUser(false)
    window.open(`https://github.com/${userName}`, '_blank')
  }

  return (
    <SettingContext.Provider
      value={{
        handleLogout,
        handleProfile
      }}
    >
      {children}
    </SettingContext.Provider>
  )
}
