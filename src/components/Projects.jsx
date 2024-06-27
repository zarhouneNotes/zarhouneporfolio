import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Project from './Project'
import { Line, SR } from '../StyledComponents'
import { MdArrowForward } from 'react-icons/md'
import { grey } from '@mui/material/colors'

function Projects() {
  const projects = [{
    title : "Medicine " ,
    desc : 'PPharmaGuard fournit des soins de santé progressifs et abordables, accessibles à tous sur mobile et en ligne' , 
    img : 'ph'
  } , 
  {
    title : "Gestion des services" ,
    desc : 'Un outil de suivi régulier des services publics en ligne, en se basant sur VOTRE EXPÉRIENCE usager' , 
    img : 'eval'
  },{
    title : "Gestion de boutique" ,
    desc : 'Un outil de suivi pour gérervotre boutique en ligne, les  produits, les commandes et les messages des clients' , 
    img : 'stor'
  }]
  return (
    <Box minHeight={'100vh'}bgcolor={grey[100]} justifyContent={'center'} display={'flex'} alignItems={'center'}  >
    <Box width={'85vw'} margin={'2cm auto'}  >
        <Box  textAlign={'center'} >
            <Typography  variant='h4'>Envie de voir quelques références ?</Typography>
            {/* <Typography mb={5} mt={1} variant='subtitle2'>Here are some of my projects. I prefered quality over quantity to show my skills</Typography> */}
        </Box>
        <SR justifyContent={'center'}my={4} ><Line  /></SR>

         <Grid container  justifyContent={'center'} bgcolor={''}  gap={8} >
          {projects.map((pr)=>{
            return <Project  pr={pr} />
          })}
           {projects.map((pr)=>{
            return <Project  pr={pr} />
          })}
                

        </Grid>
        <SR width={'100%'} mt={10}  justifyContent={'center'} bgcolor={''} >        <Button  size='large' variant='outlined'  color='secondary' endIcon={<MdArrowForward/>}  >Voir plus</Button></SR>

    </Box>
    </Box>
  )
}

export default Projects