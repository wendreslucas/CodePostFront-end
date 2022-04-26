import React, { useContext } from 'react'
import Subtitle from '../Text/Subtitle'
import { ModDelete, Overlay, Container, DviButtons, Btn } from './style.js'
import { PostContext } from '../../context/PostContext'

function ModalDelete() {
  const { CloseDelete, handleDelete } = useContext(PostContext)

  return (
    <Overlay>
      <Container>
        <ModDelete onSubmit={handleDelete}>
          <Subtitle subtitle="Are you sure you want to delete this item?" />
          <DviButtons>
            <Btn onClick={CloseDelete}>Cancel</Btn>
            <Btn type="submit">OK</Btn>
          </DviButtons>
        </ModDelete>
      </Container>
    </Overlay>
  )
}

export default ModalDelete
