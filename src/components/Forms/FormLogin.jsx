import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import Input from '../Input/Input'
import Subtitle from '../Text/Subtitle'
import Title from '../Text/Title'
import Button from '../Buttons/Button'

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

function handleSubmit(event) {
  event.preventDefault()
  console.log('Enter')
}

const FormLogin = () => {
  const [name, setName] = useState()

  return (
    <StyleForm onSubmit={handleSubmit}>
      <Title title="Welcome to CodeLeap network!" />
      <Subtitle subtitle="Please enter your username" />

      <StyleInput onChange={e => setName(e.target.value)} />
      <StyleButton disabled={!name}>Enter</StyleButton>
    </StyleForm>
  )
}

export default FormLogin
