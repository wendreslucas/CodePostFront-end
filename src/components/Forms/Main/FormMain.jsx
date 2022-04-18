import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import api from '../../../api/posts'
import Label from '../../Text/Label'
import Subtitle from '../../Text/Subtitle'
import { StyleFormCreate } from './StyleFormMain'
import Posts from '../FormPosts'

const baseURL = 'http://localhost:5000/posts'

function FormMain() {
  const navigate = useNavigate()
  const { userName, setUserName } = useContext(UserContext)
  const [content, setContent] = useState()
  const [title, setTitle] = useState()
  const [post, setPost] = useState([])

  function handleSubmit() {
    api
      .post(baseURL, {
        title,
        content,
        userName,
        created_datetime: new Date()
      })
      .then(res => console.log('Deu certo', res))
      .catch(err => console.log('Error: ', err))

    navigate('/')
  }

  return (
    <>
      <StyleFormCreate onSubmit={handleSubmit}>
        <Subtitle subtitle="What’s on your mind?" />
        <Label bottom="13px" label="Title" />
        <input
          className="input"
          autoFocus
          name="title"
          value={title}
          type="text"
          onChange={e => setTitle(e.target.value)}
          placeholder="Hello World"
        />
        <Label bottom="7px" label="Content" />
        <textarea
          className="textarea"
          name="content"
          value={content}
          type="text"
          onChange={e => setContent(e.target.value)}
          placeholder="Content Here"
          max={50000}
        />

        <button className="button" type="submit" disabled={!title || !content}>
          CREATE
        </button>
      </StyleFormCreate>
      <Posts />
    </>
  )
}

export default FormMain
