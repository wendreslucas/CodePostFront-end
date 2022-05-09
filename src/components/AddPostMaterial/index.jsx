import React, { useContext } from 'react'
import { StyleFormCreate, useStyles } from './style.js'
import Subtitle from '../Text/Subtitle'

import Snackbar from '@mui/material/Snackbar'
import TextField from '@mui/material/TextField'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import Slide from '@mui/material/Slide'
import { PostContext } from '../../context/PostContext'

function TransitionDown(props) {
  return <Slide {...props} direction="down" />
}

function AddPostMaterial() {
  const classes = useStyles()
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
        <TextField
          autoFocus
          className={classes.widthInput}
          label="Title"
          margin="normal"
          onChange={handleTitle}
          size="small"
          type="text"
          value={title}
        />

        <TextField
          className={classes.widthInput}
          label="Content"
          margin="normal"
          maxRows={5}
          multiline
          onChange={handleContent}
          size="small"
          type="text"
          value={content}
        />
        <Stack spacing={2} direction="row" className={classes.margin}>
          <Button
            className={classes.StyleButton}
            color="primary"
            disabled={!title || !content}
            onClick={handleClick(TransitionDown)}
            type="submit"
            variant="contained"
          >
            CREATE
          </Button>
        </Stack>
      </StyleFormCreate>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Post created successfully"
        key={transition ? transition.name : ''}
      />
    </>
  )
}

export default AddPostMaterial
