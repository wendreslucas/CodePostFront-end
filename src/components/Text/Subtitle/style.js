import styled from 'styled-components'
import media from '../../Ui/Media'

export const StyleSubtitle = styled.h2`
  color: white;
  font-size: 22px;
  font-weight: 700;
  padding: 23px 0 30px 32px;

  ${media.mobile} {
    font-size: 16px;
    margin-top: 30px;
  }
`
