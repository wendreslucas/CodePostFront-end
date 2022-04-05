import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Delete from '../icons/Delete'
import Edit from '../icons/Edit'
import Moment from '../Text/Moment'
import Text from '../Text/TextContent'
import User from '../Text/User'

const StyleForm = styled.div`
  border: 1px solid;
  height: 349px;
  width: 723px;
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
const DivInfo = styled.div`
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
          <Delete />
          <Edit />
        </BackImagem>
      </DivHeader>
      <DivInfo>
        <User user="@wendres" />
        <Moment moment=" 25 minutes ago" />
      </DivInfo>
      <Text text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
    </StyleForm>
  )
}

export default FormPost
