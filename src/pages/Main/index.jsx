import React, { useEffect } from 'react'
import Header from '../../components/Headers/Header'
import HeaderPost from '../../components/Headers/HeaderPost'
import AddPost from '../../components/AddPost'
import Footer from '../../components/Footer'
import { StyleMain } from './style'
import PostList from '../../components/Post/PostList'

const Main = () => {
  useEffect(() => {
    document.title = 'PostCode | Create Post'
  }, [])
  return (
    <>
      <Header />
      <StyleMain>
        <div className="DivMain">
          <div className="DivHeader">
            <HeaderPost margin="44px" size="823px" title="Postcode Network" />
          </div>
          <AddPost />
          {/* <PostList /> */}
        </div>
      </StyleMain>
      <Footer />
    </>
  )
}

export default Main
