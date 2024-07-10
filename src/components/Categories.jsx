import { Box, Button, Grid, Typography, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { useRef } from 'react'
import { Line, SR } from '../StyledComponents'
import { MdArrowForward } from 'react-icons/md'
import WebCategorie from './WebCategorie'
import { useInView } from 'framer-motion'

export default function Categories() {
    const theme = useTheme()
    const cats = [{
        src : 'https://img.freepik.com/free-psd/e-commerce-furniture-landing-page_197582-341.jpg?w=1060&t=st=1717719140~exp=1717719740~hmac=48b46bb390b20c997057bd494a67339fb2b641fc9e63c6853d11a93cd09a6a14' , 
        title : 'Vitrine', 
        desc : 'Présentez votre activité, vos services et touchez de nouveaux clients !'
    } , {
        src : 'https://img.freepik.com/free-psd/e-commerce-furniture-landing-page_197582-336.jpg?t=st=1717719125~exp=1717722725~hmac=eeb30dbb653da728dd759eb7b774b51e4bc58733d1fefe08f263ecf59bdbf61d&w=1060' , 
        title : 'E-commerce', 
        desc : 'Vendez facilement vos produits ou services en ligne depuis votre site web'
    } , {
        src : 'https://cdn.dribbble.com/userupload/10946999/file/original-4da08d159e969ca90a6411d1fc75ed82.png?resize=1200x900' , 
        title : 'Landing page', 
        desc : 'Outil essentiel dans le marketing digital, optimisé pour générer des conversions'
    } , {
        src : 'https://cdn.dribbble.com/userupload/5011472/file/original-2426331e7de82bfe0dabff6b77baae2d.png?resize=752x' , 
        title : 'Complex Web-applications', 
        desc : 'Transformez vos idées en réalité digitale avec notre expertise créative unique.'
    } , 
]

  const ref = useRef()
  const OInView = useInView(ref)
  return (
    <Box minHeight={'100vh'}bgcolor={grey[300]} width={"100%"} justifyContent={'center'} display={'flex'} alignItems={'center'}  >
    <Box width={'85vw'} margin={'2cm auto'}  >
        <Box  textAlign={'center'} >
            <Typography  variant='h4'>Le web sans complications : des sites web intuitifs et faciles à utiliser.</Typography>
            <Typography color={grey[600]} mt={1} variant='body2'>ASSUREZ VOTRE PRÉSENCE EN LIGNE DE FAÇON PROFESSIONNELLE ET SÉCURISANTE POUR VOS CLIENTS</Typography>
        </Box>
        <SR justifyContent={'center'}my={4} ><Line  /></SR>

         <Grid container gap={3} justifyContent={'space-evenly'} bgcolor={''}   >

            {cats.map((cat , i)=><WebCategorie delay={(i+1)*0.4} cat={cat} />)}
                
               

        </Grid>
        {/* <SR width={'100%'} mt={10}  justifyContent={'center'} bgcolor={''} >        <Button  size='large' variant='outlined'  color='secondary' endIcon={<MdArrowForward/>}  >Voir plus</Button></SR> */}

        <Box 
         style={{
            transform: OInView ? "none" : "scaleX(0)",
            opacity: OInView ? 1 : 0,
            transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`,
            transformOrigin :'left'
          }}
          
        ref={ref} bgcolor={"white"} mt={'2cm'} p={6}  borderLeft={ '4px solid'+theme.palette.primary.main}>
            <Typography variant='subtitle1'>votre réussite est notre priorité ! Je vous accompagne dans votre transformation digitale afin de vous aider à faire décoller votre business.</Typography>
        </Box>

    </Box>
    </Box>
  )
}
