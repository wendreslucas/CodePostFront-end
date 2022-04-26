import React, { useContext } from 'react'
import Subtitle from '../Text/Subtitle'
import { ModDelete, Overlay, Container, DviButtons, Btn } from './style.js'
import { PostContext } from '../../context/PostContext'
import { UserContext } from '../../context/UserContext'
import Slide from '@mui/material/Slide'
import Snackbar from '@mui/material/Snackbar'

function TransitionDown(props) {
  return <Slide {...props} direction="down" />
}

function ModalDelete() {
  const { userName } = useContext(UserContext)
  const { CloseDelete, handleDelete } = useContext(PostContext)

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
        <ModDelete onSubmit={handleDelete}>
          <Subtitle subtitle="Are you sure you want to delete this item?" />
          <DviButtons>
            <Btn onClick={CloseDelete}>Cancel</Btn>
            <Btn type="submit" action="/" onClick={handleClick(TransitionDown)}>
              OK
            </Btn>
          </DviButtons>
        </ModDelete>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleCloseSnack}
        TransitionComponent={transition}
        message="Post deleted successfully"
        key={transition ? transition.name : ''}
      />
    </Overlay>
  )
}

export default ModalDelete
