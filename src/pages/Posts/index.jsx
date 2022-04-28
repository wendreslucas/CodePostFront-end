import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import HeaderPost from '../../components/Header/HeaderPost'
import PostList from '../../components/Post/PostList'
import Footer from '../../components/Footer'
import { StyleDiv, StylePosts } from './style'

const Posts = () => {
  useEffect(() => {
    document.title = 'PostCode | Posts'
  }, [])

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
