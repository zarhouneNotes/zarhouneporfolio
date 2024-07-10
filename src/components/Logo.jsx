import React from 'react'
import { SR } from '../StyledComponents'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Logo({footer}) {
    const theme = useTheme()
    const isMobile  = useMediaQuery(theme.breakpoints.down('sm'))
    const navigate = useNavigate()
  return (
    <SR gap={1}>
        {/* <Box bgcolor={theme.palette.primary.main} sx={{width : isMobile ?'40px' : '50px' , aspectRatio :'1/1' , display :'flex' , justifyContent :' center' , alignItems : 'center' , borderRadius :'50%' , color : 'white'}}>
            <></>

        </Box> */}
        {/* <img src={require(`../images/logo.png`)} alt="" srcset="" width='50px' /> */}
        <Typography onClick={()=>{navigate('/')}}    letterSpacing={4} color={ footer ? 'white' :  theme.palette.primary.contrastText} variant='h4' ><b>ZARHOUNE</b></Typography>
    </SR>
  )
}

export default Logo