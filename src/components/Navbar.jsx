import React, { useState } from 'react'
import { MLink, MyList, Nvbar } from '../StyledComponents'
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import Logo from './Logo'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';



function Navbar({}) {
    const theme  = useTheme()
    const isMobile  = useMediaQuery(theme.breakpoints.down('sm'))
    const nav = useNavigate()
    const [scale , setScale] = useState(false)
    const goToContactPage=()=>{
      nav('/contact')
      setScale(false)
    }
  return (
    <Nvbar>
        <Logo />
        <MyList gap={4} s={scale} >
            <MLink  to={'/'}    variant='subtitle1'   onClick={()=>{setScale(false) }}     >Accueil </MLink>
            <MLink to={'/projects'} variant='subtitle1'  onClick={()=>{setScale(false)}}   > Réalisations</MLink>
            <MLink to={'/services'} variant='subtitle1'  onClick={()=>{setScale(false)}}   > Services</MLink>
            <MLink    to={'/about'}     variant='subtitle1'  onClick={()=>{setScale(false) }}   >    À Propos</MLink>
             {isMobile && <Button  onClick={goToContactPage}   variant='contained'>Contact</Button>}
        </MyList>
        { isMobile ? 
        <Box  onClick={()=>{setScale(!scale)}}style={{zIndex : '9' , fontSize : '24px'}}  >
            {scale ? <IoMdClose  /> :     <RxHamburgerMenu />}
        </Box>
          :   <Button   variant='contained'onClick={ goToContactPage } >Contact</Button>}
    </Nvbar>
  )
}

export default Navbar