import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.input`
  border-radius: 4px;
  border: 1px solid #777777;
  height: 28px;
  margin-left: 31px;
  margin-bottom: 19px;
  padding: 6px 0 6px 11px;
  width: ${props => props.size};
`

function Input(props) {
  return (
    <InputWrapper
      size={props.size}
      placeholder={props.placeholder}
    ></InputWrapper>
  )
}

export default Input
