import React, { useEffect } from 'react'
import Header from '../../components/Headers/Header'
import HeaderPost from '../../components/Headers/HeaderPost'
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
          <div className="DivHeader">
            <HeaderPost margin="44px" size="823px" title="Postcodes" />
          </div>
          <PostList />
        </StylePosts>
      </StyleDiv>
      <Footer />
    </>
  )
}

export default Posts
