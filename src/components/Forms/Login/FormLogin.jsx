import React, { useState } from 'react'
import Label from '../../Text/Label'
import Subtitle from '../../Text/Subtitle'
import Modal from '@mui/material/Modal'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import { StyleForm, StyleImage, StyleModal } from './StyleLogin'

const FormLogin = () => {
  const navigate = useNavigate()
  const { userName, setUserName } = React.useContext(UserContext)
  const [name, setName] = useState()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <StyleImage>
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
                navigate('/main')
              }}
            >
              <Subtitle subtitle="Welcome to CodeLeap network!" />
              <Label margin="13px" label="Please enter your username" />
              <input
                autoFocus
                className="input"
                placeholder="Username"
                type="text"
                onChange={e => setName(e.target.value)}
              />
              <button className="btn" disabled={!name}>
                ENTER
              </button>
            </StyleForm>
          </StyleModal>
        </Modal>
      </StyleImage>
    </>
  )
}

export default FormLogin
