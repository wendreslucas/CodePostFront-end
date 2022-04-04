import React from 'react'
import styled from 'styled-components'

const StyleDelete = styled.a`
  cursor: pointer;
`
const Delete = () => {
  return (
    <StyleDelete>
      <img src="/delete.svg" alt="delete" />
    </StyleDelete>
  )
}

export default Delete
