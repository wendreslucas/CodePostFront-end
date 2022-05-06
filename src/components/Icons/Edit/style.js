import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  background-color: transparent;

  img {
    visibility: ${props => (props.disabled ? 'hidden' : 'visible')};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`
