import React from 'react'
import { StyleTextArea } from './style'

function TextArea(props) {
  const { placeholder, onChange, name, value } = props
  return (
    <StyleTextArea
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default TextArea
