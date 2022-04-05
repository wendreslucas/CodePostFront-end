import React from 'react'
import styled from 'styled-components'

const StyleLabel = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 8.75px;
  padding: 0 0 0 32px;
  margin-top: 15px;
`
const Label = props => {
  return <StyleLabel>{props.label}</StyleLabel>
}

export default Label
