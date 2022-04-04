import React from 'react'
import styled from 'styled-components'

const StyleLabel = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  padding: 0 0 7px 32px;
  margin-top: 19px;
`
const Label = props => {
  return <StyleLabel>{props.label}</StyleLabel>
}

export default Label
