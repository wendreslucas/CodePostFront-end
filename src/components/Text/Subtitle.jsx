import React from 'react'
import styled from 'styled-components'

const StyleSubtitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  padding: 0 0  13px 32px ;
`
const SubtitleLogin = (props) => {
  return <StyleSubtitle>{props.subtitle}</StyleSubtitle>
}

export default SubtitleLogin