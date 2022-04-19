import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import api from '../../../api/posts'
import Label from '../../Text/Label'
import Subtitle from '../../Text/Subtitle'
import { StyleFormCreate } from './StyleFormMain'
import Posts from '../FormPosts'
import Slide from '@mui/material/Slide'
import Snackbar from '@mui/material/Snackbar'

const baseURL = 'http://localhost:5000/posts'

function TransitionDown(props) {
  return <Slide {...props} direction="down" />
}

function FormMain() {
  const { userName, setUserName } = useContext(UserContext)
  const [content, setContent] = useState()
  const [title, setTitle] = useState()
  const [open, setOpen] = React.useState(false)
  const [transition, setTransition] = React.useState(undefined)

  const handleClick = Transition => () => {
    setTransition(() => Transition)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    api
      .post(baseURL, {
        title,
        content,
        userName,
        created_datetime: new Date()
      })
      .then(res => console.log('Deu certo', res))
      .catch(err => console.log('Error: ', err))

    // navigate('/')
    setTitle('')
    setContent('')
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

        <button
          onClick={handleClick(TransitionDown)}
          className="button"
          type="submit"
          disabled={!title || !content}
        >
          CREATE
        </button>
      </StyleFormCreate>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Post created successfully"
        key={transition ? transition.name : ''}
      />
      <Posts />
    </>
  )
}

export default FormMain
