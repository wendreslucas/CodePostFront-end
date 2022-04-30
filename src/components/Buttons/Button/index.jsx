import React from 'react'
import { StyleButton } from './style'

function Button(props) {
  const { text, disabled, margin, size } = props
  return (
    <StyleButton disabled={disabled} margin={margin} size={size}>
      {text}
    </StyleButton>
  )
}

export default Button
