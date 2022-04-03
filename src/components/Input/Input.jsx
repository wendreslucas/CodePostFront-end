import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.input`
border-radius:4px;
border:1px solid #777777;
height: 28px;
margin-left: 31px;
padding: 6px 0 6px 11px;
width: 444px;
`

function Input(props) {
  
  return (
    <InputWrapper placeholder={props.placeholder}>
      
    </InputWrapper>
  )
} 



export default Input
