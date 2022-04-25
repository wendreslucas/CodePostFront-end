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

export default function FormModal() {
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
              // onClick=
              // disabled={!title || !content}
            >
              SAVE
            </button>
          </FormContainer>
        </ModalEdit>
      </Container>
    </Overlay>
  )
}
