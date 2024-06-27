import React from 'react'
import { Idea } from '../StyledComponents'
import { Box, Button, Typography, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import { MdArrowForward } from 'react-icons/md'
import DiscutionButton from './DiscutionButton'

function DoYouHaveIdea() {
    const theme = useTheme()
  return (
    <Box display={'flex'}py={'3cm'}   justifyContent={'center'}bgcolor={theme.palette.secondary.main}>
        <Idea gap={3} >
            <Typography variant='h3' color={'white'}>
            Avez-vous une idée de projet ? Discutons de votre projet !
            </Typography>
            <Typography variant='subtitle2' color={grey[400]}>Nous vous invitons à planifier une consultation gratuite avec nous pour discuter de votre vision, de vos objectifs et de la manière dont nous pouvons vous aider à les atteindre. N'hésitez pas à nous contacter !</Typography>
            <DiscutionButton />
    </Idea>
    </Box>
  )
}

export default DoYouHaveIdea