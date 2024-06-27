import React from 'react'
import { SC, SR } from '../StyledComponents'
import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

function Servicea() {
  return (
    <SR gap={2} bgcolor={'white'} alignItems={'center'}>
        <Box><img width={"100%"} src="https://cdn.dribbble.com/userupload/11412785/file/original-0ac3493cd5057f91d4f5cb829f3122c2.png?resize=752x" alt="" srcset="" /></Box>
        <SC gap={2}>
            <Typography variant='h5'>Des vitrines</Typography>
            <Typography variant='subtitle2' width={"70%"}  color={grey[700]}>
            Un site vitrine est un type de site web conçu principalement pour présenter et promouvoir une entreprise, une marque, ou une organisation, ainsi que ses produits ou services.  Il sert essentiellement à informer les visiteurs et à améliorer la visibilité en ligne de l'entreprise. 
            </Typography>

        </SC>
    </SR>
  )
}

export default Servicea