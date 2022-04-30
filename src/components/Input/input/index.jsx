import React from 'react'
import { InputWrapper } from './style'

function Input(props) {
  const { autoFocus, size, placeholder, onChange } = props
  return (
    <InputWrapper
      autoFocus={autoFocus}
      size={size}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
