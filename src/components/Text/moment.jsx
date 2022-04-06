import React from 'react'
import styled from 'styled-components'

const StyleMoment = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #777777;
  padding-right: 30px;
`

const Moment = props => {
  return <StyleMoment>{props.moment}</StyleMoment>
}

export default Moment