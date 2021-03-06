import React, { useState } from 'react'
import Label from '../Text/Label'
import Subtitle from '../Text/Subtitle'
import Input from '../Inputs/Input'
import Button from '../Buttons/Button'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { Container, StyleForm, StyleModal } from './style.js'

const FormLogin = () => {
  const navigate = useNavigate()
  const { userName, setUserName } = React.useContext(UserContext)
  const [name, setName] = useState()

  function handleLogin(e) {
    e.preventDefault()
    if (!name || name < 3 || name > 20) {
      alert('Please enter a valid github nickname')
    } else {
      setUserName(name)
      navigate('/home')
    }
  }

  return (
    <Container>
      <StyleForm onSubmit={handleLogin}>
        <Subtitle subtitle="Welcome to CodePost network!" />
        <Label margin="13px" label="Please enter your github nickname" />
        <Input
          autoFocus
          placeholder=" Github nickname"
          type="text"
          onChange={e => setName(e.target.value)}
          size="444px"
        />
        <Button margin="357px" size="111px" disabled={!name} text="ENTER" />
      </StyleForm>
    </Container>
  )
}

export default FormLogin
