import React, { useState } from 'react'
import Label from '../Text/Label'
import Subtitle from '../Text/Subtitle'
import Input from '../Inputs/Input'
import StyleButton from '../Buttons/Button'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { Container, StyleForm, StyleModal } from './style.js'

const FormLogin = () => {
  const navigate = useNavigate()
  const { userName, setUserName } = React.useContext(UserContext)
  const [name, setName] = useState()
  const [open, setOpen] = React.useState(true)

  const handleClose = () => setOpen(false)

  return (
    <Container>
      <StyleForm
        onSubmit={e => {
          e.preventDefault()
          setUserName(name)
          navigate('/home')
        }}
      >
        <Subtitle subtitle="Welcome to CodePost network!" />
        <Label margin="13px" label="Please enter your username" />
        <Input
          autoFocus
          placeholder="Username"
          type="text"
          onChange={e => setName(e.target.value)}
          size="444px"
        />
        <StyleButton
          margin="357px"
          size="111px"
          disabled={!name}
          text="ENTER"
        />
      </StyleForm>
    </Container>
  )
}

export default FormLogin
