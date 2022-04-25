import styled from 'styled-components'

export const StyleHeader = styled.div`
  width: ${props => props.size};
  height: 80px;
  background-color: black;
  display: flex;
  justify-content: start;
  margin-bottom: ${props => props.margin};
  padding-left: 37px;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  color: white;

  &:hover {
    color: #7777;
  }
`
