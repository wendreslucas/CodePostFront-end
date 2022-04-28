import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import { StyleDiv, StyleImage } from './style'

const Home = () => {
  useEffect(() => {
    document.title = 'PostCode | Home'
  }, [])

  return (
    <>
      <Header />
      <StyleDiv>
        <StyleImage>
          <img
            src="/postcode_logo.svg"
            alt="Postcode Logo"
            width="608"
            height="167"
          />
        </StyleImage>
      </StyleDiv>
      <Footer />
    </>
  )
}

export default Home
