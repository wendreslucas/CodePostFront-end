import styled from 'styled-components'
import media from '../../Ui/Media'

export const StyleText = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  padding: 0 31px 10px 30px;
  text-align: left;
  vertical-align: top;

  ${media.mobile} {
    font-size: 15px;
  }
`
