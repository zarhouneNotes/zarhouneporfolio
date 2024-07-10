import React, { useRef } from 'react'
import { MLink, SC, SR, Schedule } from '../StyledComponents'
import { Alert, Box, Button, Grid, Icon, Input, Link, TextField, Typography, useTheme } from '@mui/material'
import { GrFacebook, GrGithub, GrInstagram, GrLinkedin, GrLocation } from 'react-icons/gr'
import InfoCard from './InfoCard'
import { grey } from '@mui/material/colors'
import { MdEmail, MdFacebook, MdPhone, MdSend } from 'react-icons/md'
import MyIcon from './Icon'
import { IoLogoFacebook } from 'react-icons/io'
import { useInView } from 'framer-motion'

function DiscussProjet() {
    const theme = useTheme()
    const size = "22px"
    const [result, setResult] = React.useState("");
    const [err, setErr] = React.useState(false);
    const Oref = useRef(null)
    const LRefInView = useInView(Oref , {once :false})


    const submitForm = async (e)=>{
        setResult("Sending....");
        e.preventDefault()
        const formData = new FormData(e.target);
        const dataForm = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

     const isThereAnEmptyField =   Object.values(dataForm).some((el)=> {
            return el.length == 0 || !el || el==""
        }  )


        
    
     if (isThereAnEmptyField) {
        setErr(true)
        setResult('remplissez tout le formulaire')
        return ;
     } else {
        formData.append("access_key", "c6076266-bbc8-4454-89e9-f3ed677faaf4");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            setErr(false)
          setResult("Mail sent Successfully");
        //   e.target.reset();
        } else {
        //   console.log("Error", data);
        setErr('true')
          setResult(data.message);
        }
         
     }
        
    }
  return (
 <Box 
 
 bgcolor={theme.palette.secondary.main}  minHeight={'100vh'} display={'flex'} alignItems={''}  >
       <Schedule   

ref={Oref}
style={{
 transform: LRefInView ? "none" : "translateX(-100px)",
 opacity: LRefInView ? 1 : 0,
 transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
}}
       
       container bgcolor={grey[50]} boxShadow={'-3px 10px 40px -28px rgba(0,0,0,0.75)'} >
        <Grid  md={6} xs={11} item display={'flex'} flexDirection={'column'} gap={3}>
           { result &&  <Alert severity={ err ? 'error' :  'success'}>{result}</Alert>}
            <Typography variant='h4'><b>Discutons votre projet</b></Typography>
            <Typography variant='subtitle2' color={grey[500]}>Que vous soyez une startup cherchant à faire sensation ou une marque établie souhaitant garder une longueur d'avance, je suis là pour transformer vos idées en réalité. N'hésitez pas à nous contacter, je suis ravi d'avoir de vos nouvelles et d'explorer les possibilités de travailler ensemble !</Typography>
            <SC gap={2} textAlign={'left'}>
                <InfoCard float={true} label={'Adress'}  info='Casablanca Morocco 29640' > <GrLocation  fontSize={size} /> </InfoCard>
                <InfoCard float={false} label={'Email'}  info='zarhounehoussine@gmail.com' > <MdEmail fontSize={size} /> </InfoCard>
                <InfoCard float={false} label={'Phone'}  info='+212 695-365-475' > <MdPhone  fontSize={size}/> </InfoCard>

            </SC>
            <SR gap={5} alignSelf={'center'}sx={{scale : "0.8"}} >
                <MyIcon float={true}>  <Link href={"https://www.linkedin.com/in/zarhoune-el-houssine-368551243/"} ><GrLinkedin /> </Link>  </MyIcon>
                <MyIcon >  <Link   ><IoLogoFacebook /></Link>   </MyIcon>
                <MyIcon > <Link  ><GrInstagram /> </Link>  </MyIcon>
                <MyIcon>  <Link href={"https://github.com/zarhouneNotes"} ><GrGithub /></Link>   </MyIcon>
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