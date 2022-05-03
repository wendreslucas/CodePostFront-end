import styled from 'styled-components'
import media from '../../Ui/Media'

export const ModEdit = styled.div`
  background: #1e1e1e;
  border: 1px solid #777777;
  border-radius: 4px;
  height: 330px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  width: 723px;

  ${media.mobile} {
    width: 80%;
  }
`
export const Overlay = styled.div`
  align-items: center;
  background: #1e1e1e;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`
export const Container = styled.div`
  align-items: center;
  background: #0d0c0c;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
  padding: 2em 3em;
`
export const Header = styled.div`
  align-items: center;
  background-color: transparent;
  color: #1e1e1e;
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  font-weight: 700;
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
`
export const FormContainer = styled.form`
  height: 100%;
  gap: 15px;
  width: 100%;
`
