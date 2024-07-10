import React from 'react'
import { Line, SC, Services } from '../StyledComponents'
import { Box, Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import Service from './Service'

function WhatIDo() {
    const srvs =[{
        title : 'Front-end' , 
        desc : "Mes compétences front-end incluent des connaissances en HTML, CSS, JS et REACT. J'ai également des connaissances sur certains frameworks comme Materian Ui et Tailwind et Bootstrap et Styled Components et bien plus encore.3", 
    } , 
    {
        title : 'Back-end' , 
        desc : "Mes compétences backend incluent la connaissance de NODE JS, EXPRESS JS, MONGODB, FIREBASE et également Socket.io... Avec l'aide de ces connaissances backend, j'ai développé de nombreuses applications web complexes." , 
    }, {
        title : 'Design' , 
        desc : "Je pense que la conception Web est une compétence clé pour devenir un excellent développeur. Une interface utilisateur est l'élément le plus important dans une application Web, car elle maintient l'utilisateur engagé et cela fait du bien si vous avez une bonne conception Web" , 
    }]
  return (
    <Box bgcolor={grey[200]}>
        <Services container >
        <Grid  item md={6} xs={11} >
            <SC gap={4} >
                <Typography variant='h4'>Spécialité</Typography>
                <Line /> 
                <Typography color={grey[600]} variant='subtitle1'>
                J'utilise des technologies modernes pour améliorer mon efficacité et ma productivité au quotidien. Ces technologies me permettent de rester à la pointe de l'innovation et de répondre rapidement aux défis et opportunités qui se présentent.
                </Typography>

            </SC>
        </Grid>
        <Grid px={2} item md={5 } gap={2} xs={11} display={'flex'}  flexDirection={'column'} justifyContent={'end'}   >
           {srvs.map((srv)=> <Service  srv={srv}  key={srv.title}  />  )}
           {/* <img width={"90%"} src={require('../images/offrz.png')} alt="" srcset="" /> */}
        </Grid>
    </Services>
    </Box>
  )
}

export default WhatIDo