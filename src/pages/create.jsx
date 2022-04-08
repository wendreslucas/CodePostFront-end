import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import styled from 'styled-components'
import FormCreate from '../components/Forms/FormCreate'
import Header from '../components/Header'

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const StyleCreate = styled.main`
  width: auto;
  border: 1px solid #777777;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyleUser = styled.p`
  color: white;
  font-size: 16px;
  cursor: pointer;
`

const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const BackUser = styled.div`
  background: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
  height: 80px;
  padding-right: 30px;
`

const Create = () => {
  const { userName, setUserName } = useContext(UserContext)
  return (
    <StyleDiv>
      <StyleCreate>
        <DivHeader>
          <Header margin="44px" size="680px" title="CodeLeap Network"></Header>
          <BackUser>
            {' '}
            <StyleUser>{userName}</StyleUser>
          </BackUser>
        </DivHeader>
        <FormCreate />
      </StyleCreate>
    </StyleDiv>
  )
}

export default Create
