import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    /* background-color: ${props => (props.disabled ? 'red' : 'white')}; */
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`
