import React from 'react'
import styled from 'styled-components'
import FormCreate from '../components/Forms/FormCreate'
import FormPost from '../components/Forms/FormPost'
import Header from '../components/Header'

const StyleCreate = styled.main`
  width: 100%;
  height: auto;
  border: 1px solid #777777;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = () => {
  return (
    <StyleCreate>
      <Header margin="44px" size="800px" title="CodeLeap Network" />
      <FormCreate />
      <FormPost />
    </StyleCreate>
  )
}

export default Content