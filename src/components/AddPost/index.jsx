import React, { useContext } from 'react'
import { StyleFormCreate } from './style.js'
import Subtitle from '../Text/Subtitle'
import Label from '../Text/Label'
import Snackbar from '@mui/material/Snackbar'
import Posts from '../Post/PostList'
import Slide from '@mui/material/Slide'
import { PostContext } from '../../context/PostContext'

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
      {/* <Posts /> */}
    </>
  )
}

export default AddPost
