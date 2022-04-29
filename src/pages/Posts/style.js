import styled from 'styled-components'

export const StyleDiv = styled.div`
  align-items: center;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 85vh;

  @media (max-width: 768px) {
    min-height: 83vh;
    padding-bottom: 10px;
  }
`
export const StylePosts = styled.main`
  align-items: center;
  border: 1px solid #777777;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`
