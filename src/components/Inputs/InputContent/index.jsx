import React from 'react'
import { StyleTextArea } from './style'

function TextArea(props) {
  const { placeholder, onChange } = props
  return <StyleTextArea placeholder={placeholder} onChange={onChange} />
}

export default TextArea
