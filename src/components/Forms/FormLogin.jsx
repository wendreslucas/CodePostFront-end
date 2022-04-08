import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Label from '../Text/Label'
import Subtitle from '../Text/Subtitle'
import Modal from '@mui/material/Modal'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { UserContext } from '../../context/UserContext'

const StyleModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #000;
  box-shadow: 24px;
`
const ImageContainer = styled.div`
  top: 0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const StyleForm = styled.form`
  border: 1px solid #777777;
  height: 220px;
  width: 500px;
`
const StyleInput = styled.input`
  border-radius: 4px;
  border: 1px solid #777777;
  height: 28px;
  margin-left: 31px;
  padding: 6px 0 6px 11px;
  width: 444px;
`
const StyleButton = styled.button`
  background: black;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 33px;
  margin-top: 30px;
  margin-left: 364px;
  width: 111px;

  &:disabled {
    background: #777777;
  }
`

const FormLogin = () => {
  const navigate = useNavigate()
  const { userName, setUserName } = React.useContext(UserContext)
  const [name, setName] = useState()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <ImageContainer>
        <a>
          <img
            onClick={handleOpen}
            src="/codeleap_logo_black.png"
            alt="CodeLeap Logo"
            width="608"
            height="167"
          />
        </a>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyleModal>
            <StyleForm
              onSubmit={e => {
                e.preventDefault()
                setUserName(name)
                navigate('/create')
              }}
            >
              <Subtitle subtitle="Welcome to CodeLeap network!" />
              <Label margin="13px" label="Please enter your username" />
              <StyleInput
                placeholder="Username"
                type="text"
                onChange={e => setName(e.target.value)}
              />
              <StyleButton disabled={!name}>ENTER</StyleButton>
            </StyleForm>
          </StyleModal>
        </Modal>
      </ImageContainer>
    </>
  )
}

export default FormLogin
