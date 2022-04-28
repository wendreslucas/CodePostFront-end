import styled from 'styled-components'

export const StyleHeader = styled.div`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  font-size: 22px;
  font-weight: 700;
  height: 50px;
  justify-content: start;
  margin-bottom: ${props => props.margin};
  padding-left: 37px;
  transition: all 0.3s ease-in-out;
  width: ${props => props.size};
`
