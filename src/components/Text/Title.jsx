import React from 'react'
import styled from 'styled-components'

const StyleTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  padding: 23px 0 0 32px;
`

const Title = props => {
  return <StyleTitle>{props.title}</StyleTitle>
}

export default Title
