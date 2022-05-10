import React from 'react'
import { Button, DivButton } from './style'

function Edit(props) {
  const { disabled, onClick } = props
  return (
    <DivButton>
      <Button disabled={disabled} onClick={onClick}>
        <img src="/edit.svg" alt="edit" />
      </Button>
    </DivButton>
  )
}

export default Edit
