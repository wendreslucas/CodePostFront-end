import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    visibility: ${props => (props.disabled ? 'hidden' : 'visible')};
  }
`
