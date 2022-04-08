import React from 'react'
import styled from 'styled-components'

const StyleLabel = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 8.75px;
  padding-left: 32px;
  padding-bottom: ${props => props.bottom};
  margin-bottom: ${props => props.margin};
`
const Label = props => {
  return (
    <StyleLabel bottom={props.bottom} margin={props.margin}>
      {props.label}
    </StyleLabel>
  )
}

export default Label
