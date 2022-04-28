import styled from 'styled-components'

export const StyleLabel = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 8.75px;
  padding-left: 32px;
  padding-bottom: ${props => props.bottom};
  margin-bottom: ${props => props.margin};
`
