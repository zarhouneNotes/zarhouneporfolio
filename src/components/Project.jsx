import { Box, Button, Grid, Typography, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import { ProjectImg, SR } from '../StyledComponents'

function Project({pr}) {
  const theme = useTheme()
  return (
    <Grid item md={3} bgcolor={'transparent'} xs={11} sx={{display :'flex' , flexDirection : 'column' , gap: 1 , alignItems :'start'}}    boxShadow ='0px 10px 80px -34px rgba(0,0,0,0.3)'    >
                  
                {/* <img src="https://cdn.dribbble.com/users/1145170/screenshots/15988580/media/34c5f14498102f88b82cf330229b773a.png" alt="" srcset="" /> */}
                <ProjectImg url={require(`../images/${pr.img}.png`)} mb={2} />
                
                <Typography variant='subtitle1'  px={2} >{pr.title}</Typography>
                <Typography variant='body2' px={2} color={grey[500]} >{pr.desc}</Typography>
                <SR width={'100%'}  justifyContent={''} pb={3}  px={2}>        <Typography  size='medium' variant=''  color={theme.palette.primary.main}  >visit</Typography></SR>

    </Grid>
  )
}

export default Project