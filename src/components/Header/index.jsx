import React from 'react'
import { StyleHeader } from './style'

function Header(props) {
  return (
    <StyleHeader margin={props.margin} size={props.size}>
      {props.title}
    </StyleHeader>
  )
}

export default Header
