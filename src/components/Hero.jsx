import React, { useRef } from 'react'
import { ColoredText, MyHero, SR } from '../StyledComponents'
import { Box, Button, Link, Typography, useMediaQuery, useTheme } from '@mui/material'
import { MdArrowForward } from 'react-icons/md'
import DiscutionButton from './DiscutionButton'
import MyIcon from './Icon'
import { IoLogoFacebook } from 'react-icons/io'
import { GrDownload, GrGithub, GrInstagram, GrLinkedin } from 'react-icons/gr'
import { useInView } from 'framer-motion'

function Hero() {
    const theme = useTheme() 
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const LRef = useRef(null)
    const LRefInView = useInView(LRef , {once :false})
    const Img = useRef(null)
    const ImgInView = useInView(Img , {once :false})
  return (
    <Box 
    sx={  { background : theme.palette.secondary.main , backgroundSize : 'cover' , overflowX : 'hidden' }}
    >
    <MyHero  >
        {/* ///   left section   // */}
        <Box 
        ref={LRef}
        style={{
          transform: LRefInView ? "none" : "translateX(-100px)",
          opacity: LRefInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        width={ isMobile ? '100%'  : '60%'} 
        color={'white'} 
        textAlign={isMobile ? 'center' : 'left'}
        
        display={'flex'} flexDirection={'column'} alignItems={isMobile ? 'center':'start'}
        >
            <Typography variant='body2'>Salut,Je suis Zarhoune</Typography> 
            <Typography variant='h3'>Je suis <ColoredText>développeur</ColoredText>, je crée des superbes applications web </Typography>
            <Typography variant='subtitle2' my={3}>Je suis un développeur d'applications Web indépendant basé à Casablanca, au Maroc. Je m'efforce de créer des applications Web immersives et esthétiques grâce à un code soigneusement conçu et une conception centrée sur l'utilisateur.</Typography>
              {/* <Typography variant='h3'>Boostez votre présence en ligne</Typography>
              <Typography my={2} variant='h5'>Modernisez votre présence digitale avec des sites web innovants et dynamiques</Typography> */}
              <DiscutionButton  />
              {/* <Button endIcon={<GrDownload></GrDownload>}>Cv</Button> */}
            <SR mt={5} gap={5} alignSelf={'start'}sx={{scale : "0.6" , transformOrigin :isMobile ? 'center':'left'}} >
                <MyIcon float={true}>  <Link href={"https://www.linkedin.com/in/zarhoune-el-houssine-368551243/"} ><GrLinkedin /> </Link>  </MyIcon>
                <MyIcon >  <Link   ><IoLogoFacebook /></Link>   </MyIcon>
                <MyIcon > <Link  ><GrInstagram /> </Link>  </MyIcon>
                <MyIcon>  <Link href={"https://github.com/zarhouneNotes"} ><GrGithub /></Link>   </MyIcon>
            </SR>
        </Box >
        { 
        <Box  
        ref={Img}
        style={{
          transform: LRefInView ? "none" : "translateX(100px)",
          opacity: LRefInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        
        bgcolor={''} width='80%' display={'flex'} justifyContent={isMobile ? 'center' : 'end'}>
            <img   width ={isMobile ? '100%':'80%'}   src={require('../images/heroo.png')} alt="" srcset="" />
            {/* <img  width ={isMobile ? '100%':'60%'}  src="https://img.freepik.com/free-photo/3d-rendering-cartoon-boy_23-2150797600.jpg?t=st=1714769366~exp=1714772966~hmac=6328742df2d6a32d15ae6d0ae1d48022eeaa75ee7d21440bbaaa59c306ae324c&w=740" alt="" srcset="" /> */}
        </Box>
        }
         
        
    </MyHero>
    </Box>
  )
}

export default Hero