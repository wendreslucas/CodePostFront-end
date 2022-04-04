import React from 'react'
import styled from 'styled-components'
import Subtitle from './Text/Subtitle'

const StyleHeader = styled.div`
  width: ${props => props.size};
  height: 80px;
  background-color: black;
  display: flex;
  justify-content: start;
  margin-bottom: ${props => props.margin};
  padding-left: 37px;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  color: white;
`

function Header(props) {
  return (
    <StyleHeader margin={props.margin} size={props.size}>
      {props.title}
    </StyleHeader>
  )
}

export default Header
