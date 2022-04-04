import React from 'react'
import styled from 'styled-components'

const StyleTextArea = styled.textarea`
  border-radius: 4px;
  border: 1px solid #777777;
  margin-left: 31px;
  padding: 6px 0 6px 11px;
  resize: none;
  width: 659px;
  height: 74px;
`

const TextArea = () => {
  return <StyleTextArea placeholder="Content Here"></StyleTextArea>
}

export default TextArea
