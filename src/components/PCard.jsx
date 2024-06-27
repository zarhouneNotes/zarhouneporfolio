import React from 'react'
import { ProcessCard } from '../StyledComponents'
import { GrPlan } from "react-icons/gr";
import { Box, Typography, useTheme } from '@mui/material';
import { grey, purple } from '@mui/material/colors';



function PCard({children , title , desc}) {
    const theme = useTheme()
    
  return (
    <ProcessCard  gap={2} p={3} md={5} border={'1px solid '} borderColor={grey[100]} xs={12} borderRadius={3} >
            <Box color={theme.palette.primary.main} borderRadius={3} bgcolor={grey[100]} width={'90px'} height={'90px'} display={'flex'} justifyContent={'center'} alignItems={'center'}> 
                 {children}
           </Box>
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='body1' color={grey[700]}><small>{desc}</small></Typography>

    </ProcessCard>
  )
}

export default PCard