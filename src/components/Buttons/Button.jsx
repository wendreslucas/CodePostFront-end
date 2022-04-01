import React from 'react'
import styled from 'styled-components'
import TextButton from './TextButton'

const StyleButton = styled.button`
  width: 111px;
  height: 33px;
  background: black;
`
const Button = () => {
  return (
    <StyleButton>
      <TextButton></TextButton>
    </StyleButton>
  )
}

export default Button
