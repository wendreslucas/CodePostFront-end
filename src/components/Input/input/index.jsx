import React from 'react'
import { InputWrapper } from './style'

function Input(props) {
  return (
    <InputWrapper
      size={props.size}
      placeholder={props.placeholder}
    ></InputWrapper>
  )
}

export default Input
