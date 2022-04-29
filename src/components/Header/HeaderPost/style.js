import styled from 'styled-components'

export const StyleHeader = styled.div`
  align-items: center;
  background-color: #0d0c0c;
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

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
    max-height: 83vh;
    max-width: 612px;
    padding-bottom: 10px;
  }
`
