import React from 'react'
import { Button, DivButton } from './style'

function Delete(props) {
  const { disabled, onClick } = props
  return (
    <DivButton>
      <Button disabled={disabled} onClick={onClick}>
        <img src="/delete.svg" alt="delete" />
      </Button>
    </DivButton>
  )
}

export default Delete
