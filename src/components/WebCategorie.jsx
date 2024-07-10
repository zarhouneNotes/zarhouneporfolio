import React, { useRef } from 'react'
import { Box, Button, Grid, Typography, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import { MdArrowForward } from 'react-icons/md'
import { ProjectImg, SR } from '../StyledComponents'
import { useInView } from 'framer-motion'

function WebCategorie({cat , delay}) {
  const ref = useRef()
  const OInView = useInView(ref)
  return (
    <Grid 
    style={{
      transform: OInView ? "none" : "scale(0.8)",
      opacity: OInView ? 1 : 0,
      transition: `all ${delay}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`
    }}
    
    ref={ref}  p={2} item md={2.7} bgcolor={'white'} xs={11} sx={{display :'flex' , flexDirection : 'column' , gap: 1 }} textAlign={'center'} borderRadius={3} boxShadow={'-3px 5px 50px -28px rgba(0,0,0,0.75)' } >
                  
                <img src={cat.src} alt="" srcset="" />
                {/* <ProjectImg url={require('../images/eval.png')} mb={2} /> */}
                
                <Typography variant='subtitle1' mt={2}  >{cat.title}</Typography>
                <Typography variant='body2' mb={2} px={1}  color={grey[600]} >{cat.desc}</Typography>
                {/* <SR width={'100%'}  justifyContent={''} pb={3}  px={2}>        <Typography  size='medium' variant=''  color={theme.palette.primary.main}  >visit</Typography></SR> */}

    </Grid>
  )
}

export default WebCategorie