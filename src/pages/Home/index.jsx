import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import { StyleDiv, StyleImage, Imagem } from './style'

const Home = () => {
  useEffect(() => {
    document.title = 'PostCode | Home'
  }, [])

  return (
    <>
      <Header />
      <StyleDiv>
        <StyleImage>
          <Imagem
            src="/postcode_logo.svg"
            alt="Postcode Logo"
            width="608"
            height="168"
          />
        </StyleImage>
      </StyleDiv>
      <Footer />
    </>
  )
}

export default Home
