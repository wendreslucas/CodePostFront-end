import React from 'react'
import styled from 'styled-components'

const StyleUser = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #777777;
  padding-left: 30px;
`
const User = props => {
  return <StyleUser>{props.user}</StyleUser>
}

export default User
