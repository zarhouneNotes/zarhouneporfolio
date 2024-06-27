import React from 'react'
import { Icon, SC, SR } from '../StyledComponents'
import { Typography, useTheme } from '@mui/material'
import { grey, purple } from '@mui/material/colors'

function InfoCard({float,label , info , children}) {
  const theme  = useTheme()
  return (
    <SR gap={1} p={2.5} bgcolor={float && 'white'} boxShadow={float && '-3px 10px 40px -28px rgba(0,0,0,0.75)'} borderRadius={4}>
        <Icon bgcolor={ float ? theme.palette.primary.main  : grey[100]} color={!float ? theme.palette.primary.main  : grey[100]} >
            {children}
        </Icon>
        <SC>
            <Typography variant='subtitle2' color={grey[500]}><small>{label}</small></Typography>
            <Typography variant='subtitle1'>{info}</Typography>
        </SC>
    </SR>
  )
}

export default InfoCard