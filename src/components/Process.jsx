import React from 'react'
import { Line, ProcessSec, SC, SR } from '../StyledComponents'
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import PCard from './PCard'
import { grey } from '@mui/material/colors'
import { GrPlan } from 'react-icons/gr'
import { SiAntdesign } from "react-icons/si";
import { MdArrowForward, MdOutlineDeveloperMode } from "react-icons/md";
import { GrDeploy } from "react-icons/gr";




function Process() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    

  return (
    <ProcessSec container   >
        <Grid  item md={6} xs={11} >
            <SC gap={4} >
                <Typography variant='h4'>Processus de travail</Typography>
                <Line />
                <Typography color={grey[600]} variant='subtitle1'>La création d'une application Web implique plusieurs étapes, de la conceptualisation au déploiement. Tout au long du processus, la collaboration entre les concepteurs, les développeurs et les parties prenantes est cruciale pour garantir que le produit final répond aux exigences et aux attentes de ses utilisateurs.</Typography>

            </SC>
        </Grid>
        <Grid item  md={6} xs={12} bgcolor={''} display={'flex'} justifyContent={isMobile ?'center' : 'end'} >
            <Grid container md={12} justifyContent={isMobile ?'center' : 'end'} bgcolor={''}   xs={9}  gap={2}>
                 
                <PCard    title={'Idée et Planification'} desc={'Définir le but et les objectifs de votre application web et Planifier les fonctionnalités  de votre application '}       >
                    <GrPlan fontSize={'30px'} /> 
                </PCard>
                <PCard  title={'Conception et Design'} desc={"Créer des wireframes ou des maquettes pour visualiser la mise en page et l'interface utilisateur."}  >  
                    <SiAntdesign  fontSize={'30px'} /> 
                </PCard>
                <PCard  title={'Développement '} desc={"Choisir les technologies appropriées pour votre application web (frontend, backend, et base de données)"}  >  
                    <MdOutlineDeveloperMode fontSize={'30px'} /> 
                </PCard>
                <PCard  title={'Déploiement '} desc={'Configurer votre environnement serveur et le configurer pour exécuter votre application et Déployer le code sur le serveur'}  >  
                    <GrDeploy fontSize={'30px'} /> 
                </PCard>
               
            </Grid>
        </Grid>

        {/* <SR width={'100%'} mt={10}  justifyContent={'center'} bgcolor={''} >        <Button  size='large' variant='outlined'  color='secondary' endIcon={<MdArrowForward/>}  >Plus de détails</Button></SR> */}

    </ProcessSec>
  )
}

export default Process