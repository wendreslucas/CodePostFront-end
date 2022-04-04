import React from 'react'
import styled from 'styled-components'

const StyleButton = styled.button`
  background: black;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 33px;
  margin-top: 35px;
  margin-left: 578px;
  width: 111px;
`
const Button = props => {
  return <StyleButton>{props.text}</StyleButton>
}

export default Button
