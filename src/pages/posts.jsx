import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import PostList from '../components/PostList'
import Footer from '../components/Footer'
import HeaderPost from '../components/HeaderPost'

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StylePosts = styled.main`
  width: auto;
  border: 1px solid #777777;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

const Posts = () => {
  return (
    <>
      <Header />
      <StyleDiv>
        <StylePosts>
          <HeaderPost margin="44px" size="823px" title="CodeLeap Posts" />
          <PostList />
        </StylePosts>
      </StyleDiv>
      <Footer />
    </>
  )
}

export default Posts
