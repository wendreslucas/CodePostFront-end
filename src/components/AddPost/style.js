import styled from 'styled-components'

export const StyleFormCreate = styled.form`
  border: 1px solid #777777;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding-bottom: 10px;
  margin-bottom: 30px;
  width: 723px;

  @media (max-width: 768px) {
    max-width: 80%;
  }

  .input {
    background-color: #262425;
    border-radius: 4px;
    border: 1px solid #777777;
    color: #8c8080;
    height: 28px;
    margin-left: 31px;
    margin-bottom: 19px;
    padding: 6px 0 6px 11px;
    width: 650px;

    @media (max-width: 768px) {
      max-width: 85%;
    }
  }
  .textarea {
    background-color: #262425;
    border-radius: 4px;
    border: 1px solid #777777;
    color: #8c8080;
    font-family: roboto;
    height: 55px;
    margin-left: 31px;
    padding: 6px 0 6px 11px;
    resize: none;
    width: 650px;

    @media (max-width: 768px) {
      max-width: 85%;
    }
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

    @media (max-width: 768px) {
      font-size: 12px;
      margin-left: 375px;
      width: 70px;
    }

    &:disabled {
      background: #777777;
    }
  }
`
