import React, { useEffect } from 'react'
import AddPost from '../components/AddPost'
import HeaderPost from '../components/HeaderPost'
import { StyleMain } from './StyleMain'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Main = () => {
  useEffect(() => {
    document.title = 'CodePost | Create Post'
  }, [])
  return (
    <>
      <Header />
      <StyleMain>
        <div className="DivMain">
          <div className="DivHeader">
            <HeaderPost margin="44px" size="823px" title="CodeLeap Network" />
          </div>
          <AddPost />
        </div>
      </StyleMain>
      <Footer />
    </>
  )
}

export default Main
