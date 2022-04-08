import React, { useContext } from 'react'
import styled from 'styled-components'
import FormPost from '../components/Forms/FormPost'
import Header from '../components/Header'
import { UserContext } from '../context/UserContext'

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StylePosts = styled.main`
  width: auto;
  border: 1px solid #777777;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
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

const Posts = () => {
  const { userName, setUserName } = useContext(UserContext)
  return (
    <StyleDiv>
      <StylePosts>
        <DivHeader>
          <Header margin="44px" size="680px" title="CodeLeap Posts"></Header>
          <BackUser>
            {' '}
            <StyleUser>{userName}</StyleUser>
          </BackUser>
        </DivHeader>
        <FormPost />
      </StylePosts>
    </StyleDiv>
  )
}

export default Posts
