import React from 'react'
import { SC, SR, Schedule } from '../StyledComponents'
import { Box, Button, Grid, Icon, Input, TextField, Typography } from '@mui/material'
import { GrFacebook, GrGithub, GrInstagram, GrLinkedin, GrLocation } from 'react-icons/gr'
import InfoCard from './InfoCard'
import { grey } from '@mui/material/colors'
import { MdEmail, MdFacebook, MdPhone, MdSend } from 'react-icons/md'
import MyIcon from './Icon'
import { IoLogoFacebook } from 'react-icons/io'

function DiscussProjet() {
    const size = "22px"
    const submitForm = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };
         
        console.log(data)
    }
  return (
 <Box bgcolor={grey[100]}  minHeight={'100vh'}>
       <Schedule   container bgcolor={grey[50]} boxShadow={'-3px 10px 40px -28px rgba(0,0,0,0.75)'} >
        <Grid  md={6} xs={11} item display={'flex'} flexDirection={'column'} gap={3}>
            <Typography variant='h4'><b>Discutons votre projet</b></Typography>
            <Typography variant='subtitle2' color={grey[500]}>Que vous soyez une startup cherchant à faire sensation ou une marque établie souhaitant garder une longueur d'avance, je suis là pour transformer vos idées en réalité. N'hésitez pas à nous contacter, je suis ravi d'avoir de vos nouvelles et d'explorer les possibilités de travailler ensemble !</Typography>
            <SC gap={2} textAlign={'left'}>
                <InfoCard float={true} label={'Adress'}  info='Casablanca Morocco 29640' > <GrLocation  fontSize={size} /> </InfoCard>
                <InfoCard float={false} label={'Email'}  info='zarhounehoussine@gmail.com' > <MdEmail fontSize={size} /> </InfoCard>
                <InfoCard float={false} label={'Phone'}  info='+212 695-365-475' > <MdPhone  fontSize={size}/> </InfoCard>

            </SC>
            <SR gap={5} alignSelf={'center'}sx={{scale : "0.8"}} >
                <MyIcon float={true}> <IoLogoFacebook />  </MyIcon>
                <MyIcon> <GrInstagram />  </MyIcon>
                <MyIcon> <GrGithub />  </MyIcon>
                <MyIcon> <GrLinkedin />  </MyIcon>
            </SR>
        </Grid>
        <Grid md={5} xs={11}  item  px={''} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
        <Typography variant='subtitle2' color={grey[500]} mb={'1cm'} >
        Planifiez une consultation gratuite avec nous aujourd'hui et embarquons ensemble dans ce passionnant  voyage !
        </Typography>

        <Box component={'form'} onSubmit={submitForm} sx={{display :'flex' , flexDirection :'column' , gap : '30px' }}>
         <TextField id="standard-basic" label="Email*"  name='email' variant="standard" />
         <TextField id="standard-basic" label="Name*" name='name' variant="standard" />
         <TextField id="standard-basic" label="Phone*"  name='phone'     variant="standard" />
         <TextField id="standard-basic" label="Subject*" name='subject'   variant="standard" />
         <TextField id="standard-basic"  label="Message*" name='message'   variant="standard" />
        <Button type='submit'  sx={{alignSelf : 'start'}}   endIcon={<MdSend  />} variant='contained'>Submit</Button>

        </Box>

            

        </Grid>
    </Schedule>
 </Box>
  )
}

export default DiscussProjet