import { Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { SC, SR } from '../StyledComponents'
import { grey, purple } from '@mui/material/colors'

function Service({srv}) {
  const theme = useTheme()
  return (
    
            <SC borderLeft={`4px solid ${theme.palette.primary.light}`} p={3} bgcolor={'white'} gap={1} borderRadius={2} boxShadow={'-3px 5px 40px -28px rgba(0,0,0,0.75)'} >
                <Typography variant='h6' color={theme.palette.secondary.main}><b>{srv.title}</b></Typography>
                <Typography variant='body2' color={grey[600]}>{srv.desc}</Typography>
                <SR></SR>
            </SC>
    
  )
}

export default Service