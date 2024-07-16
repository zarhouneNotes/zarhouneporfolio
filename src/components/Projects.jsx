import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Project from './Project'
import { Line, SR } from '../StyledComponents'
import { MdArrowForward } from 'react-icons/md'
import { grey } from '@mui/material/colors'

function Projects() {
  const projects = [{
    title : "Sheez web application " ,
    desc : 'une application Web de médias sociaux où les utilisateurs peuvent faire défiler de courtes vidéos, les partager,  interagir avec elles et discuter avec les autres ' , 
    img : 'sheez',
    url :'https://sheesapp.onrender.com/'
  } , 
  {
    title : "Evaluaction" ,
    desc : 'outil de renforcement de la politique de la digitalisation de l’administration Marocaine. Il permet un suivi régulier de l’ensemble des services publics en ligne à travers un score reflétant l’expérience des usagers' , 
    img : 'eval',
    url :'https://evaluactionmaroc.com/'
  },{
    title : "Shuilder" ,
    desc : 'Un outil pour créer des boutiques en ligne, avec un coté admin pour gérer les  produits, les commandes et les messages des clients, le paiment en ligne est un choix..' , 
    img : 'stor',
    url :'https://shuilder.netlify.app/'
  },
  {
    title : "Shicial" ,
    desc : "une application Web de médias sociaux où les utilisateurs peuvent partager des textes et des images, réagir aux publications et également discuter avec d'autres utilisateurs " , 
    img : 'shi',
    url :'https://shicial.netlify.app/'
  }]
  return (
    <Box minHeight={'100vh'}bgcolor={grey[300]} justifyContent={'center'} display={'flex'} alignItems={'center'}  >
    <Box width={'85vw'} margin={'2cm auto'}  >
        <Box  textAlign={'center'} >
            <Typography  variant='h4'>Envie de voir quelques références ?</Typography>
            <Typography mb={5} mt={1} variant='subtitle2'>J'ai insisté de citer juste les projets qui sont un peu complexes et réflectent bien mes compétences </Typography>
        </Box>
        <SR justifyContent={'center'}my={4} ><Line  /></SR>

         <Grid container  justifyContent={'space-evenly'} bgcolor={''}  gap={3} >
          {projects.map((pr , i)=>{
            console.log(i)
            return <Project delay={(1+i)*0.4}  pr={pr} />
          })}
           {/* {projects.map((pr)=>{
            return <Project  pr={pr} />
          })}
                 */}

        </Grid>
        {/* <SR width={'100%'} mt={10}  justifyContent={'center'} bgcolor={''} >        <Button  size='large' variant='outlined'  color='secondary' endIcon={<MdArrowForward/>}  >Voir plus</Button></SR> */}

    </Box>
    </Box>
  )
}

export default Projects