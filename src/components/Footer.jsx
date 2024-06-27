import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { MLink, MyFooter, SR } from '../StyledComponents'
import { IoLogoFacebook } from 'react-icons/io'
import { GrGithub, GrInstagram, GrLinkedin } from 'react-icons/gr'
import { grey } from '@mui/material/colors'
import Logo from './Logo'

function Footer() {
    const theme = useTheme()
  return (
   <Box bgcolor={'black'} color={'white'} p={5}>
    <MyFooter>
        <Logo  footer={true}/>
        <MyFooter >
           <MLink  to={'/'}    variant='subtitle1'    >Accueil </MLink>
            <MLink to={'/projects'} variant='subtitle1' >Nos Réalisations</MLink>
            <MLink to={'/services'} variant='subtitle1'>Nos Services</MLink>
            <MLink    to={'/about'}     variant='subtitle1'  >    À Propos</MLink>
        </MyFooter>
        <SR gap={2}>
            <IoLogoFacebook />
            <GrInstagram />
            <GrGithub />
            <GrLinkedin />
        </SR>
    </MyFooter>
    <hr style={{margin : '1cm 0px'}}  />
    <MyFooter color={grey[300]}>
    <Typography variant='body2' >Made with by PURECODE 	&#10004; </Typography>
    <Typography variant='body2'  > Copyright © 2024.</Typography>

    </MyFooter>
   </Box>
  )
}

export default Footer