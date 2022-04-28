import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import HeaderPost from '../../components/Header/HeaderPost'
import AddPost from '../../components/AddPost'
import Footer from '../../components/Footer'
import { StyleMain } from './style'

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
