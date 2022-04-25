import styled from 'styled-components'

export const StylePosts = styled.div`
  border: 1px solid;
  width: 723px;
  padding-bottom: 10px;
  margin-bottom: 30px;

  .DivHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .BackImagem {
    background: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 190px;
  }

  .Info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
export const StyleEdit = styled.div`
  margin: 2% 0;
  width: 90%;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;

  .title {
    font-size: 1.5rem;
  }

  .input {
    width: 100%;
    height: 30px;
    border: 1px solid #000000;
    background-color: none;
    border-radius: 5px;
    margin-top: 5px;
    padding-left: 5px;
  }

  .textarea {
    width: 100%;
    height: 60px;
    border: 1px solid #000000;
    background-color: none;
    border-radius: 5px;
    margin-top: 5px;
    padding-left: 5px;
  }

  .DivBtn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .button {
    border-radius: 5px;
    width: 25%;
    max-width: 100px;
    height: 30px;
    background-color: ${props => (props.disb ? '#000000' : '#c4c4c4')};
    color: #ffffff;
    border: none;
    cursor: ${props => (props.disb ? 'pointer' : 'not-allowed')};
  }
`
export const StyleModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #000;
  box-shadow: 24px;
`
