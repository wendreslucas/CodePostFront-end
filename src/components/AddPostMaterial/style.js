import styled from 'styled-components'
import { makeStyles } from '@material-ui/styles'
import media from '../Ui/Media'

export const StyleFormCreate = styled.form`
  border: 1px solid #777777;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  padding-right: 25px;
  padding-left: 25px;
  margin-bottom: 30px;
  width: 623px;

  ${media.mobile} {
    width: 80%;
  }
`
export const useStyles = makeStyles({
  widthInput: {
    width: '559px'
  },
  StyleButton: {
    background: '#171819',
    height: '33px',

    width: '111px'
  },
  margin: {
    marginLeft: '450px',
    padding: '10px'
  }
})
