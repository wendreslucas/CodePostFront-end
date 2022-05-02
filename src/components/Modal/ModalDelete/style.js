import styled from 'styled-components'
import media from '../../Ui/Media'

export const Overlay = styled.div`
  background: #1e1e1e;
  bottom: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  align-items: center;
  background: #1e1e1e;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 2em 3em;
  width: 100%;
`

export const ModDelete = styled.form`
  border: 1px solid #777777;
  margin-bottom: 30px;
  padding-bottom: 10px;
  width: 723px;

  ${media.mobile} {
    width: 80%;
  }
`

export const Header = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  color: #1e1e1e;
  font-size: 1.2em;
  font-weight: 700;
  justify-content: space-between;
  padding: 0;
  width: 100%;

  & > button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-right: 35px;
    max-height: 25px;
  }

  ${media.mobile} {
    font-size: 0.7rem;
  }
`
export const FormContainer = styled.form`
  height: 100%;
  gap: 15px;
  width: 100%;
`

export const DviButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  padding-right: 18px;
`

export const Btn = styled.button`
  border: 1px solid;
  background-color: #fff;
  color: black;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 33px;
  margin-top: 30px;
  margin-right: 16px;
  width: 111px;
`
