import React from 'react'
import { ColoredText, MyHero } from '../StyledComponents'
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import { MdArrowForward } from 'react-icons/md'
import DiscutionButton from './DiscutionButton'

function Hero() {
    const theme = useTheme() 
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box sx={  { backgroundImage : `url(${require('../images/hero.jpg')})` , backgroundSize : 'cover'}}>
    <MyHero  >
        {/* ///   left section   // */}
        <Box 
        // width={ isMobile ? '100%'  : '50%'} 
        color={'white'} 
        textAlign={'center'}
        >
            {/* <Typography variant='body2'>Hey, I am Zarhoune</Typography> *//* 
            <Typography variant='h3'>I am a <ColoredText>developper</ColoredText>, I create great web applications</Typography>
            <Typography variant='subtitle2' my={3}>I'm a Freelance  web application Developer based in Casablanca, Morocco. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</Typography>
            <Button style={{zIndex : '-1'}} size='large' variant='contained'>Get In Touch</Button> */}
              <Typography variant='h3'>Boostez votre présence en ligne</Typography>
              <Typography my={2} variant='h5'>Modernisez votre présence digitale avec des sites web innovants et dynamiques</Typography>
              <DiscutionButton  />
        </Box >
        { 
        // <Box bgcolor={''} width='60%' display={'flex'} justifyContent={isMobile ? 'center' : 'end'}>
        //     <img style={{borderRadius :'50%'}} width ={isMobile ? '100%':'60%'}  src={"https://img.freepik.com/photos-gratuite/vue-3d-homme-affaires_23-2150709830.jpg?t=st=1715852379~exp=1715855979~hmac=e7e883c5c127b8cdd9f134189704d4545b19a6d08e8cdb596610ee7df14c2548&w=740"} alt="" srcset="" />
        //     {/* <img   width = src="https://img.freepik.com/free-photo/3d-rendering-cartoon-boy_23-2150797600.jpg?t=st=1714769366~exp=1714772966~hmac=6328742df2d6a32d15ae6d0ae1d48022eeaa75ee7d21440bbaaa59c306ae324c&w=740" alt="" srcset="" /> */}
        // </Box>
        }
        
    </MyHero>
    </Box>
  )
}

export default Hero