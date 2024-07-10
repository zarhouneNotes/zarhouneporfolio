import React, { useRef } from 'react'
import { Aboutme, ColoredText, Line, MyHero, SC, SR } from '../StyledComponents'
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import { RxArrowDown, RxArrowRight } from 'react-icons/rx'
import { IoIosCodeWorking, IoMdApps } from 'react-icons/io'
import { grey } from '@mui/material/colors'
import { GrMail } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'framer-motion'

export default function About() {
    const theme = useTheme() 
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const navigate = useNavigate()
    const ref = useRef(null)
    const LRefInView = useInView(ref , {once :false})

    const GoTo = (url)=>{
        navigate(url)
    }

  return (
    <Box  
    
    display={'flex'} alignItems={'center'} bgcolor={theme.palette.secondary.main} >
            <Aboutme
            ref={ref}
            style={{
              transform: LRefInView ? "none" : "translateX(-100px)",
              opacity: LRefInView ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            
            height={''} bgcolor={'white'} gap={3}     >
                {!isMobile && 
                <Box width={  '50%'} display={'flex'} justifyContent={'space-'}>
                    {/* <img style={{borderRadius :'50%'}} width={isMobile ? '100%' :"60%"} src="https://img.freepik.com/free-photo/3d-rendering-cartoon-like-boy-looking-adventure_23-2150797610.jpg?t=st=1714767489~exp=1714771089~hmac=3b7070fee0da0918d10dd94463fa75a8fcf8baa18f1a74586eede191d53ba18e&w=740" alt="" srcset="" /> */}
                    <img  width ='100%' src={require('../images/me.jpg')} alt="" srcset="" />

                </Box>}

                <SC width={ isMobile ? '100%' : '45%'}gap={ 3} justifyItems={'center'}>
                    <Typography variant='h4'><b>QUI SUIS-JE ?</b> </Typography>
                    <Line cl={true} />
                    <Typography variant='h6'>Je suis ZARHOUNE EL HOUSSINE, J'ai 23 ans et je suis un <ColoredText>développeur</ColoredText> </Typography>
                    <Typography variant='subtitle1' color={grey[600]}>Je construis  de applications web personnalisés répondant aux besoins uniques de chaque client. Quelle que soit votre idée, des pages d'atterrissage simples aux plateformes de commerce électronique complexes, j'offre une gamme de services pour aider les entreprises à établir une forte présence en ligne. Je fournis une maintenance et un support continus pour garantir que votre site web reste sécurisé et à jour.</Typography>
                    <Typography variant='subtitle1' color={grey[600]}>Mes offres me permet aussi de répondre de façon complète à l’enjeu que représente internet aujourd’hui : Un site internet de <ColoredText>qualité</ColoredText>, <ColoredText>SEO Friendly</ColoredText>, rapide et entièrement  <ColoredText>sécurisé </ColoredText>.</Typography>

                    <SR gap={2} justifyContent={ isMobile ?    'center'  : 'start'  } flexDirection={isMobile && 'column'}>
                        <Button onClick={()=>{GoTo('/contact')}}  endIcon={<GrMail  size={"14px"} />}  variant='contained'>Discutons votre projet </Button>
                       
                        <Button onClick={()=>{GoTo('/projects')}} endIcon={<RxArrowRight size={"14px"} />} variant='text'> Mes Réalisations</Button>
                    </SR>
                </SC>
            </Aboutme>
    </Box>
  )
}
