import React from 'react'
import styled from 'styled-components'

const StyleText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  vertical-align: top;
  color: black;
  padding: 0 31px 10px 30px;
`
const Text = props => {
  return <StyleText>{props.text}</StyleText>
}

export default Text
