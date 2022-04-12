import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../api/posts'
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

const FormTest = () => {
  return (
    <StyleForm>
      <DivHeader>
        <Header size=" 723px" title={post?.title} />
        <BackImagem>
          <Delete />
          <Edit />
        </BackImagem>
      </DivHeader>
      <DivInfo>
        <User user={post?.username} />
        <Moment moment={post?.created_datetime} />
      </DivInfo>
      <Text text={post?.content} />
    </StyleForm>
  )
}

export default FormTest
