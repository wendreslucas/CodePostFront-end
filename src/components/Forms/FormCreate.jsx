import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../api/posts'
import Label from '../Text/Label'
import Subtitle from '../Text/Subtitle'

const baseURL = 'http://localhost:5000/posts'

const StyleForm = styled.form`
  border: 1px solid;
  height: 349px;
  width: 723px;
  margin-bottom: 35px;
`
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #777777;
  height: 28px;
  margin-left: 31px;
  padding: 6px 0 6px 11px;
  /* width: ${props => props.size}; */
  width: 650px;
`

const StyleTextArea = styled.textarea`
  border-radius: 4px;
  border: 1px solid #777777;
  margin-left: 31px;
  padding: 6px 0 6px 11px;
  resize: none;
  width: 650px;
  height: 55px;
  font-family: roboto;
`

const StyleButton = styled.button`
  background: black;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 33px;
  margin-top: 25px;
  margin-left: 578px;
  width: 111px;

  &:disabled {
    background: #777777;
  }
`

const FormCreate = () => {
  const [content, setContent] = useState()
  const [title, setTitle] = useState()

  function handleSubmit() {
    api
      .post(baseURL, {
        title,
        content,
        created_datetime: new Date()
      })
      .then(res => console.log('Posting...', res))
      .catch(err => console.log('Error: ', err))
  }

  return (
    <>
      <StyleForm onSubmit={handleSubmit}>
        <Subtitle subtitle="What’s on your mind?" />
        <Label label="Title" />
        <Input
          name="title"
          value={title}
          type="text"
          onChange={e => setTitle(e.target.value)}
          placeholder="Hello World"
        />
        <Label label="Content" />
        <StyleTextArea
          name="content"
          value={content}
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
