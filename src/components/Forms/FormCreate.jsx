import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../api/posts'
import Label from '../Text/Label'
import Subtitle from '../Text/Subtitle'

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
  const [subtitle, setSubtitle] = useState()
  const [content, setContent] = useState()
  const [posts, setPost] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Enter')
  }

  return (
    <>
      <StyleForm onSubmit={handleSubmit}>
        <Subtitle subtitle="What’s on your mind?" />
        <Label label="Title" />
        <Input
          value={posts.title}
          type="text"
          onChange={e => setSubtitle(e.target.value)}
          placeholder="Hello World"
        />
        <Label label="Content" />
        <StyleTextArea
          value={content}
          type="text"
          onChange={e => setContent(e.target.value)}
          placeholder="Content Here"
        />

        <StyleButton disabled={!subtitle || !content}>CREATE</StyleButton>
      </StyleForm>
    </>
  )
}

export default FormCreate
