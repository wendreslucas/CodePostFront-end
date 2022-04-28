import styled from 'styled-components'

export const StylePosts = styled.div`
  border: 1px solid #777777;
  margin-bottom: 30px;
  padding-bottom: 10px;
  width: 723px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

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
    border: none;
    border-radius: 5px;
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
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
