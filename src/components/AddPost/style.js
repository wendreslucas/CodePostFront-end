import styled from 'styled-components'

export const StyleFormCreate = styled.form`
  border: 1px solid #777777;
  padding-bottom: 10px;
  margin-bottom: 30px;
  width: 723px;

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
    font-family: roboto;
    height: 55px;
    margin-left: 31px;
    padding: 6px 0 6px 11px;
    resize: none;
    width: 650px;
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

  h1 {
    color: red;
    font-size: 1.5rem;
    margin-left: 31px;
    margin-bottom: 19px;
  }
`
