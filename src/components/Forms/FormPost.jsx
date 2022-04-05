import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Delete from '../icons/delete'
import Edit from '../icons/edit'
import Moment from '../Text/moment'
import User from '../Text/user'

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
    </StyleForm>
  )
}

export default FormPost
