import React from 'react'

import { Container, Ancor } from './styles'

export default function Footer() {
  return (
    <Container>
      <strong>
        Study app developed by
        <Ancor target="_blank" href="https://github.com/wendreslucas">
          {' '}
          @wendreslucas
        </Ancor>
      </strong>
    </Container>
  )
}
