import styled from 'styled-components'

export const ModalEdit = styled.div`
  border: 1px solid;
  width: 723px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  .input {
    border-radius: 4px;
    border: 1px solid #777777;
    height: 28px;
    margin-left: 31px;
    margin-bottom: 19px;
    padding: 6px 0 6px 11px;
    /* width: ${props => props.size}; */
    width: 650px;
  }
  .textarea {
    border-radius: 4px;
    border: 1px solid #777777;
    margin-left: 31px;
    padding: 6px 0 6px 11px;
    resize: none;
    width: 650px;
    height: 55px;
    font-family: roboto;
  }
  .button {
    background: black;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    height: 33px;
    margin-top: 25px;
    margin-left: 570px;
    width: 111px;
    &:disabled {
      background: #777777;
    }
  }
`
export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  /* max-width: 820px;
  max-height: 750px; */

  padding: 2em 3em;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  color: #1e1e1e;
  background-color: transparent;
  padding: 0;
  font-weight: 700;
  font-size: 1.2em;

  & > button {
    max-height: 25px;
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 35px;
    font-size: 16px;
  }
`
export const FormContainer = styled.form`
  height: 100%;
  width: 100%;

  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  gap: 15px;
`
