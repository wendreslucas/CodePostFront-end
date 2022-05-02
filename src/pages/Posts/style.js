import styled from 'styled-components'
import media from '../../components/Ui/Media'

export const StyleDiv = styled.div`
  align-items: center;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 85vh;
`
export const StylePosts = styled.main`
  align-items: center;
  border: 1px solid #777777;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: auto;

  ${media.mobile} {
    width: 80%;
  }
`
