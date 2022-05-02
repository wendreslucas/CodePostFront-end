import styled from 'styled-components'
import media from '../../Ui/Media'

export const StyleTextArea = styled.textarea`
  border-radius: 4px;
  border: 1px solid #777777;
  margin-left: 31px;
  padding: 6px 0 6px 11px;
  resize: none;
  width: 659px;
  height: 74px;

  ${media.mobile} {
    background-color: #262425;
    color: #8c8080;
    width: 80%;
    margin-bottom: 25px;
    margin-top: 20px;
    margin-left: 25px;
  }
`
