import styled from 'styled-components'

export const Icone = styled.img`
  height: 25px;
  width: 25px;
`

export const IconeTema = styled(Icone)`
  filter: ${({ theme }) => theme.filter};
`

export const BtnTema = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`
