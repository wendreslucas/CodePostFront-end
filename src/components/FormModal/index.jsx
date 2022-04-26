import React, { useContext } from 'react'
import { PostContext } from '../../context/PostContext'
import Label from '../../components/Text/Label'
import Subtitle from '../../components/Text/Subtitle'
import { IoClose } from 'react-icons/io5'
import {
  ModalEdit,
  Overlay,
  Container,
  Header,
  FormContainer
} from './style.js'
import Slide from '@mui/material/Slide'
import Snackbar from '@mui/material/Snackbar'

function TransitionDown(props) {
  return <Slide {...props} direction="down" />
}

export default function FormModal() {
  const [open, setOpen] = React.useState(false)
  const [transition, setTransition] = React.useState(undefined)

  const handleClick = Transition => () => {
    setTransition(() => Transition)
    setOpen(true)
  }
  const handleCloseSnack = () => {
    setOpen(false)
  }
  const {
    handleClose,
    title,
    handleTitle,
    content,
    handleContent,
    handleSubmit
  } = useContext(PostContext)
  return (
    <Overlay>
      <Container>
        <ModalEdit>
          <Header>
            <Subtitle subtitle="Edit" />
            <button onClick={handleClose}>
              <IoClose />
            </button>
          </Header>
          <FormContainer onSubmit={handleSubmit}>
            <Label bottom="13px" label="Title" />
            <input
              autoFocus
              className="input"
              name="title"
              value={title}
              type="text"
              onChange={handleTitle}
            />
            <textarea
              className="textarea"
              name="content"
              value={content}
              type="text"
              onChange={handleContent}
              max={50000}
            />
            <button
              className="button"
              type="submit"
              onClick={handleClick(TransitionDown)}
            >
              SAVE
            </button>
          </FormContainer>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleCloseSnack}
            TransitionComponent={transition}
            message="Post updated successfully"
            key={transition ? transition.name : ''}
          />
        </ModalEdit>
      </Container>
    </Overlay>
  )
}
