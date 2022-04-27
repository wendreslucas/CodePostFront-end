import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import AddPost from '../components/AddPost'
import HeaderPost from '../components/HeaderPost'
import { StyleMain } from './StyleMain'
import Header from '../components/Header'

const Main = () => {
  const { userName, setUserName } = useContext(UserContext)
  return (
    <>
      <Header />
      <StyleMain>
        <div className="DivMain">
          <div className="DivHeader">
            <HeaderPost margin="44px" size="823px" title="CodeLeap Network" />
          </div>
          <AddPost />
        </div>
      </StyleMain>
    </>
  )
}

export default Main
