import React from 'react'
import { SC } from '../StyledComponents'
import { Button, Typography, useTheme } from '@mui/material'
import { MdArrowForward } from 'react-icons/md'
import DiscutionButton from './DiscutionButton'

function PreFooter() {
    const theme = useTheme()
  return (
    <SC  color='white' alignItems={'center'} py={10} gap={4} sx={{background : theme.palette.secondary.dark}} >
                      <Typography variant='h3'>Boostez votre présence en ligne</Typography>
                     <DiscutionButton />


    </SC>
  )
}

export default PreFooter