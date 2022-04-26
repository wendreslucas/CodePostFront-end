import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import styled from 'styled-components'
import AddPost from '../components/AddPost'
import Header from '../components/Header'
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
            <Header margin="44px" size="680px" title="CodeLeap Network" />
          </Ancor>

          <div className="BackUser">
            {' '}
            <div className="StyleUser">
              <Chip
                sx={style}
                avatar={
                  <Avatar
                    alt={userName}
                    src={`https://github.com/${userName}.png`}
                  />
                }
                label={userName}
                variant="outlined"
              />
            </div>
          </div>
        </div>
        <AddPost />
      </div>
    </StyleMain>
  )
}

export default Main