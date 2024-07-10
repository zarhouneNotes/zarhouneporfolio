import { Button } from '@mui/material'
import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function DiscutionButton({vr  , col }) {
  const navigate = useNavigate()
  return (
    <Button 
    onClick={()=>{navigate('/contact')}}
    style={{zIndex : '1' }} size='large' variant={vr ? vr : 'contained'}  color={ col? col :   'info'} endIcon={<MdArrowForward/>} 
     >Discutons votre projet</Button>

  )
}

export default DiscutionButton