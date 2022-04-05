import React from 'react'
import styled from 'styled-components'

const StyleUser = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #777777;
  padding-left: 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #7777;
  }
`
const StyleAncor = styled.a`
  text-decoration: none;
  cursor: pointer;
`

const User = props => {
  return (
    <StyleAncor>
      <StyleUser>{props.user}</StyleUser>
    </StyleAncor>
  )
}

export default User
