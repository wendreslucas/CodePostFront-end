import React from 'react'
import styled from 'styled-components'
import Input from '../Input/Input'
import Subtitle from '../Text/Subtitle'
import Title from '../Text/Title'
import Button from '../Buttons/Button'
import InputContent from '../Input/InputContent'

const StyleForm = styled.form`
  border: 1px solid;
  height: 349px;
  width: 723px;
  margin: 44px 0 44px 0;
`
const FormCreate = () => {
  function handleSubmit(event) {
    event.preventDefault()
    console.log('Enter')
  }
  return (
    <>
      <StyleForm onSubmit={handleSubmit}>
        <Title title="What’s on your mind?" />
        <Subtitle subtitle="Title" />
        <Input size="659px" />
        <Subtitle subtitle="Content" />
        <InputContent />
        <Button text="CREATE" />
      </StyleForm>
    </>
  )
}

export default FormCreate
