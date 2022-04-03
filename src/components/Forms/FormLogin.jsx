import React from 'react'
import styled from 'styled-components'
import InputLogin from '../Input/InputLogin'
import SubtitleLogin from '../Text/SubtitleLogin'
import TitleLogin from '../Text/TitleLogin'
import ButtonEnter from '../Buttons/ButtonEnter'
 
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
      <TitleLogin/>
      <SubtitleLogin/>
      <InputLogin/>
      <ButtonEnter text="Enter"/>
    </StyleForm>
  )
}

export default FormLogin