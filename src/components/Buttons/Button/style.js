import styled from 'styled-components'
import media from '../../Ui/Media'

export const StyleButton = styled.button`
  background: black;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 33px;
  margin-bottom: 23px;
  margin-top: 35px;
  margin-left: ${props => props.margin};
  width: ${props => props.size};

  &:disabled {
    background: #777777;
  }

  ${media.mobile} {
    font-size: 14px;
    margin-left: 30px;
    margin-top: 20px;
    width: 80%;
  }
`
