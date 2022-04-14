import styled from 'styled-components'

export const StyleMain = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */

  .DivMain {
    width: auto;
    /* height: 100vh; */
    border: 1px solid #777777;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .DivHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .BackUser {
    background: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100px;
    height: 80px;
    padding-right: 80px;
  }

  .StyleUser {
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
`
