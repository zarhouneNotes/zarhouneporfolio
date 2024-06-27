import React from 'react'
import { Icon } from '../StyledComponents'
import { grey, purple } from '@mui/material/colors'
import { useTheme } from '@mui/material'

function MyIcon({children , float}) {
  const theme  = useTheme()
  return (
    <Icon bgcolor={ float ? theme.palette.primary.main  : grey[100]} color={!float ? theme.palette.primary.main  : grey[100]}>{children}</Icon>
  )
}

export default MyIcon