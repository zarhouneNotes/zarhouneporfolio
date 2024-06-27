import React from 'react'
import { Line, SC, Services } from '../StyledComponents'
import { Box, Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import Service from './Service'

function WhatIDo() {
    const srvs =[{
        title : 'Front-end' , 
        desc : 'My frontend skills includes knowledge of HTML, CSS, JS, and REACT. I also have knowledge of some frameworks like Materian Ui and Tailwind and Bootstrap and Styled Components' , 
    } , 
    {
        title : 'Back-end' , 
        desc : 'My backend skill include knowledge of NODE JS, EXPRESS JS, MONGODB and FIREBASE etc. With the help this backend knowledge I have developed web applications' , 
    }, {
        title : 'Design' , 
        desc : 'I feel Web Designing is a key skills to become a great developer. A UI is the most important think in a web application, because it keeps user engaged and it feels good if you have good web design' , 
    }]
  return (
    <Box >
        <Services container bgcolor={""}>
        <Grid  item md={6} xs={11} >
            <SC gap={4} >
                <Typography variant='h4'>Spécialité</Typography>
                <Line /> 
                <Typography variant='subtitle1'>
                Nous nous spécialisons dans la création de sites web personnalisés répondant aux besoins uniques de chaque client. Des pages d'atterrissage simples aux complexes plateformes de l'e-commerce , nous offrons une gamme de services pour aider les entreprises à établir une forte présence en ligne. Nous fournissons une maintenance et un support continus pour garantir que votre site web reste sécurisé et à jour.
                </Typography>

            </SC>
        </Grid>
        <Grid px={2} item md={6 } gap={2} xs={11} display={'flex'}  justifyContent={'end'}   >
           {/* {srvs.map((srv)=> <Service  srv={srv}  key={srv.title}  />  )} */}
           <img width={"90%"} src={require('../images/offrz.png')} alt="" srcset="" />
        </Grid>
    </Services>
    </Box>
  )
}

export default WhatIDo