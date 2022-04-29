import styled from 'styled-components'

export const StyleMain = styled.div`
  align-items: center;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    max-height: 83vh;
    padding-bottom: 10px;
  }

  .DivMain {
    align-items: center;
    border: 1px solid #777777;
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 768px) {
      max-width: 80%;
    }
  }

  .DivHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
      max-width: 610px;
    }
  }
`
