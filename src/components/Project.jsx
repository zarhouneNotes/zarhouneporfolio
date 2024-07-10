import { Box, Button, Grid, Link, Typography, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { useRef } from 'react'
import { MdArrowForward } from 'react-icons/md'
import { ProjectImg, SR } from '../StyledComponents'
import { useInView } from 'framer-motion'

function Project({pr , delay}) {
  const theme = useTheme()
  const ref = useRef()
  const inView = useInView(ref)
  return (
    <Grid 
    ref={ref}
    style={{
      transform: inView ? "none" : "scale(0.8)",
      opacity: inView ? 1 : 0,
      transition: `all ${delay}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`
    }}
    
    item md={2.7} bgcolor={'white'} xs={11} sx={{display :'flex' , flexDirection : 'column' , gap: 1 , alignItems :'start'}}    boxShadow ='0px 10px 80px -34px rgba(0,0,0,0.3)'    >
                  
                {/* <img src="https://cdn.dribbble.com/users/1145170/screenshots/15988580/media/34c5f14498102f88b82cf330229b773a.png" alt="" srcset="" /> */}
                <ProjectImg url={require(`../images/${pr.img}.png`)} mb={2} />
                
                <Typography variant='subtitle1'  px={2} >{pr.title}</Typography>
                <Typography variant='body2' px={2} color={grey[600]} >{pr.desc}</Typography>
                <SR width={'100%'} marginTop={'auto'}  justifyContent={''} pb={3}  px={2}>        <Link target="_blank" sx={{textDecoration :'none'}}  size='medium' variant='' href={`${pr.url}`}  color={theme.palette.primary.main}  >visit</Link></SR>

    </Grid>
  )
}

export default Project