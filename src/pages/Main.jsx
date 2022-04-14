import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import styled from 'styled-components'
import FormMain from '../components/Forms/Main/FormMain'
import Header from '../components/Header'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import { StyleMain } from './StyleMain'

const style = {
  cursor: 'pointer'
}

const Main = () => {
  const { userName, setUserName } = useContext(UserContext)
  return (
    <StyleMain>
      <div className="DivMain">
        <div className="DivHeader">
          <Header margin="44px" size="680px" title="CodeLeap Network"></Header>
          <div className="BackUser">
            {' '}
            <p className="StyleUser">
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
            </p>
          </div>
        </div>
        <FormMain />
      </div>
    </StyleMain>
  )
}

export default Main
