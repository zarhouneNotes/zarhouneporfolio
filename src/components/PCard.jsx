import React, { useRef } from 'react'
import { ProcessCard } from '../StyledComponents'
import { GrPlan } from "react-icons/gr";
import { Box, Typography, useTheme } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import { useInView } from 'framer-motion';



function PCard({children , title , desc  , delay }) {
    const theme = useTheme()
    const Oref = useRef(null)
    const OInView = useInView(Oref , {once :false})
    
  return (
    <ProcessCard 
    ref={Oref} 
    style={{
      transform: OInView ? "none" : "scale(0.8)",
      opacity: OInView ? 1 : 0,
      transition: `all ${delay}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`
    }}
    gap={2} p={3} md={5} border={'1px solid '} borderColor={grey[100]} xs={12} borderRadius={3} >
            <Box color={theme.palette.primary.main} borderRadius={3} bgcolor={grey[100]} width={'90px'} height={'90px'} display={'flex'} justifyContent={'center'} alignItems={'center'}> 
                 {children}
           </Box>
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='body2' color={grey[600]}><>{desc}</></Typography>

    </ProcessCard>
  )
}

export default PCard