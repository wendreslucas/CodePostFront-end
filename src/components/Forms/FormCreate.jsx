import React, { useState } from 'react'
import styled from 'styled-components'
import Subtitle from '../Text/Subtitle'
import Title from '../Text/Title'

const StyleForm = styled.form`
  border: 1px solid;
  height: 349px;
  width: 723px;
`
const InputWrapper = styled.input`
  border-radius: 4px;
  border: 1px solid #777777;
  height: 28px;
  margin-left: 31px;
  padding: 6px 0 6px 11px;
  /* width: ${props => props.size}; */
  width: 659px;
`

const StyleTextArea = styled.textarea`
  border-radius: 4px;
  border: 1px solid #777777;
  margin-left: 31px;
  padding: 6px 0 6px 11px;
  resize: none;
  width: 659px;
  height: 74px;
`

const StyleButton = styled.button`
  background: black;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 33px;
  margin-top: 35px;
  margin-left: 578px;
  width: 111px;

  &:disabled {
    background: #777777;
  }
`

const FormCreate = () => {
  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Enter')
  }
  return (
    <>
      <StyleForm onSubmit={handleSubmit}>
        <Title title="What’s on your mind?" />
        <Subtitle subtitle="Title" />
        <InputWrapper
          type="text"
          onChange={e => setTitle(e.target.value)}
          placeholder="Hello World"
        />
        <Subtitle subtitle="Content" />
        <StyleTextArea
          type="text"
          onChange={e => setContent(e.target.value)}
          placeholder="Content Here"
        />

        <StyleButton disabled={!title || !content}>CREATE</StyleButton>
      </StyleForm>
    </>
  )
}

export default FormCreate
