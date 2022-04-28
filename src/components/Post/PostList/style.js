import styled from 'styled-components'

export const StylePosts = styled.div`
  border: 1px solid;
  margin-bottom: 30px;
  padding-bottom: 10px;
  width: 723px;

  .DivHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .BackImagem {
    align-items: center;
    background: black;
    display: flex;
    justify-content: space-evenly;
    width: 190px;
  }

  .Info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
export const StyleEdit = styled.div`
  align-items: flex-start;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  margin: 2% 0;
  width: 90%;

  .title {
    font-size: 1.5rem;
  }

  .input {
    background-color: none;
    border: 1px solid #000000;
    border-radius: 5px;
    height: 30px;
    margin-top: 5px;
    padding-left: 5px;
    width: 100%;
  }

  .textarea {
    background-color: none;
    border: 1px solid #000000;
    border-radius: 5px;
    height: 60px;
    margin-top: 5px;
    padding-left: 5px;
    width: 100%;
  }

  .DivBtn {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .button {
    background-color: ${props => (props.disb ? '#000000' : '#c4c4c4')};
    border-radius: 5px;
    border: none;
    color: #ffffff;
    cursor: ${props => (props.disb ? 'pointer' : 'not-allowed')};
    height: 30px;
    max-width: 100px;
    width: 25%;
  }
`
export const StyleModal = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  box-shadow: 24px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`
