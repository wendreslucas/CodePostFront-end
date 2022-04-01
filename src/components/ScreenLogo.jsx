import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'

const ImageContainer = styled.div`
  display: block;
  margin: 0 auto;
`
const ScreenLogo = () => {
  return (
    <ImageContainer>
      <Link href="/login">
        <a>
          <Image
            src="/codeleap_logo_black.png"
            alt="CodeLeap Logo"
            width="608"
            height="167"
          />
        </a>
      </Link>
    </ImageContainer>
  )
}

export default ScreenLogo