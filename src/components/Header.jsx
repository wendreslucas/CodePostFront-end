import React from 'react'
import styled from 'styled-components'
import Title from './Text/Title'

const StyleHeader = styled.div`
  width: 800px;
  height: 80px;
  background-color: black;
  display: flex;
  justify-content: start;
  padding-left: 37px;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
`

function Header(props) {
  return <StyleHeader>{props.title}</StyleHeader>
}

export default Header
