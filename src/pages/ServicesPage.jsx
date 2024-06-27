import React from 'react'
import { SC, ServicePage } from '../StyledComponents'
import { Box, Button, Typography, useTheme } from '@mui/material'
import Servicea from '../components/Servicea'
import { grey } from '@mui/material/colors'
import Categories from '../components/Categories'
import PreFooter from '../components/PreFooter'
import DiscutionButton from '../components/DiscutionButton'

function ServicesPage() {
    const theme = useTheme()
  return (
    <SC bgcolor={grey[200]} alignItems={'center'} pb={8}>
          <Box  width={'100%'} textAlign={'center'} color={'white'} py={3} bgcolor={theme.palette.secondary.dark}>
                        <Typography variant='h5'>Nos offres contient plusieurs types des sites</Typography>
          </Box>
   
            {/* <ServicePage  >
                    <SC>
                    
                        <SC gap={1}>
                            <Servicea />
                            <Servicea />
                            <Servicea />
                            <Servicea />
                        </SC>
                    </SC>
            </ServicePage> */}
            <Categories />
            <DiscutionButton vr={'outlined'} col={'secondary'} />
            {/* <PreFooter /> */}
     </SC>
  )
}

export default ServicesPage