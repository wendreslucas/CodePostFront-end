import React, { useContext } from 'react'
import { PostContext } from '../../../context/PostContext'
import { UserContext } from '../../../context/UserContext'
import Label from '../../Text/Label'
import Subtitle from '../../Text/Subtitle'
import { IoClose } from 'react-icons/io5'
import { ModEdit, Overlay, Container, Header, FormContainer } from './style.js'
import Slide from '@mui/material/Slide'
import Snackbar from '@mui/material/Snackbar'
import Input from '../../Inputs/Input'
import TextArea from '../../Inputs/InputContent'
import Button from '../../Buttons/Button'

function TransitionDown(props) {
  return <Slide {...props} direction="down" />
}

export default function ModalEdit() {
  const { userName } = useContext(UserContext)
  const {
    handleClose,
    title,
    handleTitle,
    content,
    handleContent,
    handleSubmit
  } = useContext(PostContext)

  const [open, setOpen] = React.useState(false)
  const [transition, setTransition] = React.useState(undefined)

  const handleClick = Transition => () => {
    setTransition(() => Transition)
    setOpen(true)
  }
  const handleCloseSnack = () => {
    setOpen(false)
  }

  return (
    <Overlay>
      <Container>
        <ModEdit>
          <Header>
            <Subtitle subtitle="Edit" />
            <button onClick={handleClose}>
              <IoClose />
            </button>
          </Header>
          <FormContainer onSubmit={handleSubmit}>
            <Label bottom="13px" label="Title" />
            <Input
              autoFocus
              name="title"
              onChange={handleTitle}
              size="658px"
              type="text"
              value={title}
            />
            <Label bottom="13px" label="Content" />
            <TextArea
              name="content"
              value={content}
              type="text"
              onChange={handleContent}
              max={50000}
            />
            <Button
              size="111px"
              text="SAVE"
              margin="573px"
              type="submit"
              onClick={handleClick(TransitionDown)}
            />
          </FormContainer>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleCloseSnack}
            TransitionComponent={transition}
            message="Post updated successfully"
            key={transition ? transition.name : ''}
          />
        </ModEdit>
      </Container>
    </Overlay>
  )
}
