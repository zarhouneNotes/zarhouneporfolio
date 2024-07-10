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
    url :'https://www.linkedin.com/feed/update/urn:li:activity:7213620234790862852?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7213620234790862852%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNpn4HU8lRaSskaDzLsWGww%3D%3D'
  } , 
  {
    title : "Evaluaction" ,
    desc : 'outil de renforcement de la politique de la digitalisation de l’administration Marocaine. Il permet un suivi régulier de l’ensemble des services publics en ligne à travers un score reflétant l’expérience des usagers' , 
    img : 'eval',
    url :'https://www.linkedin.com/feed/update/urn:li:activity:7214317961371660289?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7214317961371660289%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNpn4HU8lRaSskaDzLsWGww%3D%3D'
  },{
    title : "Shuilder" ,
    desc : 'Un outil pour créer des boutiques en ligne, avec un coté admin pour gérer les  produits, les commandes et les messages des clients, le paiment en ligne est un choix..' , 
    img : 'stor',
    url :'https://www.linkedin.com/feed/update/urn:li:activity:7213717247385571328?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7213717247385571328%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNpn4HU8lRaSskaDzLsWGww%3D%3D'
  },
  {
    title : "Shicial" ,
    desc : "une application Web de médias sociaux où les utilisateurs peuvent partager des textes et des images, réagir aux publications et également discuter avec d'autres utilisateurs " , 
    img : 'shi',
    url :'https://www.linkedin.com/posts/zarhoune-el-houssine-368551243_socialabrmedia-react-reactjs-activity-7213544611233890305-l3lq?utm_source=share&utm_medium=member_desktop'
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