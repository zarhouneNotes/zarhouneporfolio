import { Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { SC } from '../StyledComponents'
import { grey, purple } from '@mui/material/colors'

function Service({srv}) {
  const theme = useTheme()
  return (
    
            <SC borderLeft={`3px solid ${theme.palette.primary.light}`} p={3} bgcolor={'white'} gap={1} borderRadius={2} >
                <Typography variant='h6' color={theme.palette.secondary.main}><b>{srv.title}</b></Typography>
                <Typography variant='subtitle2' color={grey[600]}>{srv.desc}</Typography>
            </SC>
    
  )
}

export default Service