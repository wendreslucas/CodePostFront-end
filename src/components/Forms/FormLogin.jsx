import React from 'react'
import styled from 'styled-components'
import InputLogin from '../Input/InputLogin'
import SubtitleLogin from '../Text/SubtitleLogin'
import TitleLogin from '../Text/TitleLogin'
import ButtonEnter from '../Buttons/ButtonEnter'
import TextButton from '../Buttons/TextButton'
 
const StyleForm = styled.form`
  width: 500px;
  height: 220px;
  border: 1px solid;
`
const FormLogin = () => {
  function handleSubmit(event) {
    event.preventDefault()
      console.log('Enter')
    }
  return (
    <StyleForm onSubmit={handleSubmit}>
      <TitleLogin/>
      <SubtitleLogin/>
      <InputLogin/>
      <ButtonEnter />
    </StyleForm>
  )
}

export default FormLogin
