import React from 'react'
import styled from 'styled-components'
import FormCreate from '../components/Forms/FormCreate'
import FormPost from '../components/Forms/FormPost'
import FormTest from '../components/Forms/FormTest'
import Header from '../components/Header'

const StyleCreate = styled.main`
  width: 100%;
  height: auto;
  border: 1px solid #777777;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Teste = () => {
  return (
    <StyleCreate>
      <FormTest />
    </StyleCreate>
  )
}

export default Teste
