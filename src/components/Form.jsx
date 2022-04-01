import React from 'react'
import styled from 'styled-components'
import Input from '../components/Input/Input'
import Subtitle from '../components/Text/Subtitle'
import Title from '../components/Text/Title'
import Button from '../components/Buttons/Button'
import TextButton from './Buttons/TextButton'

const StyleForm = styled.form`
  width: 500px;
  height: 220px;
  border: 1px solid;
`
const Form = () => {
  return (
    <StyleForm>
      <Title></Title>
      <Subtitle>Please enter your username</Subtitle>
      <Input />
      <Button>
        <TextButton></TextButton>
      </Button>
    </StyleForm>
  )
}

export default Form
