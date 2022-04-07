import React from 'react'
import styled from 'styled-components'

const StyleSubtitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  padding: 23px 0 30px 32px;
`

const Subtitle = props => {
  return <StyleSubtitle>{props.subtitle}</StyleSubtitle>
}

export default Subtitle
