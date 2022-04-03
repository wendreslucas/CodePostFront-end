import React from 'react'
import styled from 'styled-components'
import Input from '../Input/Input'
import Subtitle from '../Text/Subtitle'
import Title from '../Text/Title'
import Button from '../Buttons/Button'
 
const StyleForm = styled.form`
border: 1px solid;
height: 220px;
width: 500px;
`
const FormLogin = () => {
  function handleSubmit(event) {
    event.preventDefault()
      console.log('Enter')
    }
  return (
    <StyleForm onSubmit={handleSubmit}>
      <Title />
      <Subtitle/>
      <Input/>
      <Button />
    </StyleForm>
  )
}

export default FormLogin