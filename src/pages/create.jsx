import React from 'react'
import styled from 'styled-components'
import FormCreate from '../components/Forms/FormCreate'
import Header from '../components/Header'

const StyleCreate = styled.main`
  width: 100%;
  height: 500px;
  border: 1px solid #777777;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Create = () => {
  return (
    <StyleCreate>
      <Header title="CodeLeap Network" />
      <FormCreate />
    </StyleCreate>
  )
}

export default Create
