import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import styled from 'styled-components'
import AddPost from '../components/AddPost'
import HeaderPost from '../components/HeaderPost'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import { StyleMain } from './StyleMain'

const style = {
  cursor: 'pointer',
  color: 'white'
}

const Ancor = styled.a`
  text-decoration: none;
`

const Main = () => {
  const { userName, setUserName } = useContext(UserContext)
  return (
    <StyleMain>
      <div className="DivMain">
        <div className="DivHeader">
          <Ancor href="/">
            <HeaderPost margin="44px" size="680px" title="CodeLeap Network" />
          </Ancor>

          <div className="BackUser">
            {' '}
            <div className="StyleUser"></div>
          </div>
        </div>
        <AddPost />
      </div>
    </StyleMain>
  )
}

export default Main
