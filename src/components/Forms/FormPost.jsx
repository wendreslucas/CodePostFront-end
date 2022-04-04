import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Image from 'next/image'

const StyleForm = styled.div`
  border: 1px solid;
  height: 349px;
  width: 723px;
`
const Title = styled.h1`
  background-color: red;
`

const BackImagem = styled.div`
  background: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 190px;
`

const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const FormPost = () => {
  return (
    <StyleForm>
      <DivHeader>
        <Header
          size=" 723px"
          title=" My First Post at CodeLeap Network!"
        ></Header>
        <BackImagem>
          <img src="/delete.svg" alt="delete" />
          <img src="/edit.svg" alt="edit" />
        </BackImagem>
      </DivHeader>
    </StyleForm>
  )
}

export default FormPost
