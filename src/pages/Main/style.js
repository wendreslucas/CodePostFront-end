import styled from 'styled-components'

export const StyleMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;

  .DivMain {
    align-items: center;
    border: 1px solid #777777;
    display: flex;
    flex-direction: column;
    width: auto;
  }

  .DivHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .BackUser {
    align-items: center;
    background: black;
    display: flex;
    height: 80px;
    justify-content: space-evenly;
    padding-right: 80px;
    width: 100px;
  }

  .StyleUser {
    color: white;
    cursor: pointer;
    font-size: 16px;
  }
`
