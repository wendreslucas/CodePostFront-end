import styled from 'styled-components'

export const DivButton = styled.div`
  align-items: center;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  height: 40px;
  transition: opacity 0.15s;
  width: 40px;

  &:hover {
    opacity: 0.5;
  }
`

export const Button = styled.button`
  border: none;
  background-color: transparent;

  img {
    visibility: ${props => (props.disabled ? 'hidden' : 'visible')};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`
