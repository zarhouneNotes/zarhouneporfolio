import { Button } from '@mui/material'
import React from 'react'
import { MdArrowForward } from 'react-icons/md'

function DiscutionButton({vr  , col }) {
  return (
    <Button style={{zIndex : '1' }} size='large' variant={vr ? vr : 'contained'}  color={ col? col :   'info'} endIcon={<MdArrowForward/>}  >Discutons votre projet</Button>

  )
}

export default DiscutionButton