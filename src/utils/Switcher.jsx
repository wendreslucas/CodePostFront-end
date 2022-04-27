import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Icone } from './Ui'

const claro = <Icone src={DarkModeIcon} alt="tema claro" />
const escuro = <Icone src={DarkModeIcon} alt="tema escuro" />

export default ({ tema }) => (tema ? escuro : claro)
