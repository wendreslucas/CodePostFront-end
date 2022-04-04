import React from 'react'
import styled from 'styled-components'

const StyleEdit = styled.a`
  cursor: pointer;
`
const Edit = () => {
  return (
    <StyleEdit>
      <img src="/edit.svg" alt="edit" />
    </StyleEdit>
  )
}

export default Edit
