import styled from 'styled-components'
import media from '../../components/Ui/Media'

export const StyleMain = styled.div`
  align-items: center;
  background-color: #1e1e1e;

  display: flex;
  flex-direction: column;
  min-height: 85vh;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;

  .DivMain {
    align-items: center;
    border: 1px solid #777777;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    width: auto;
  }

  .DivHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  ${media.mobile} {
    .DivMain {
      width: 80%;
    }

    .DivHeader {
      width: 100%;
    }
  }
`
