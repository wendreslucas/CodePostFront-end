import React from 'react'
import styled from 'styled-components'

const StyleTextArea = styled.textarea`
  /* width: 659px; */
  border-radius: 4px;
  border: 1px solid #777777;

  margin-left: 31px;
  padding: 6px 0 6px 11px;
`

const TextArea = () => {
  return (
    <StyleTextArea
      placeholder="Content Here"
      rows="5"
      cols="33"
    ></StyleTextArea>
  )
}

export default TextArea
