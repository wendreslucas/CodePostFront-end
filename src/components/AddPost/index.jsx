import React, { useContext, useState } from 'react'
import { PostContext } from '../../context/PostContext'
import Label from '../Text/Label'
import Subtitle from '../Text/Subtitle'
import { StyleFormCreate } from './style.js'
import Posts from '../PostList'
import Slide from '@mui/material/Slide'
import Snackbar from '@mui/material/Snackbar'

function TransitionDown(props) {
  return <Slide {...props} direction="down" />
}

function AddPost() {
  const { title, content, handleTitle, handleContent, handleSubmit } =
    useContext(PostContext)

  const [open, setOpen] = React.useState(false)
  const [transition, setTransition] = React.useState(undefined)

  const handleClick = Transition => () => {
    setTransition(() => Transition)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
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
          onChange={handleTitle}
          placeholder="Title Here"
        />
        <Label bottom="7px" label="Content" />
        <textarea
          className="textarea"
          name="content"
          value={content}
          type="text"
          onChange={handleContent}
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
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Post created successfully"
        key={transition ? transition.name : ''}
      />
      <Posts />
    </>
  )
}

export default AddPost
