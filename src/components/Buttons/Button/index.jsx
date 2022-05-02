import React from 'react'
import { StyleButton } from './style'

function Button(props) {
  const { text, disabled, margin, size, onClick } = props
  return (
    <StyleButton
      disabled={disabled}
      margin={margin}
      size={size}
      onClick={onClick}
    >
      {text}
    </StyleButton>
  )
}

export default Button
