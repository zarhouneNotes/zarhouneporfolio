import { Box, Grid, styled } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { Link } from "react-router-dom";

export const SR = styled(Box)({
    display :'flex' , 
    alignItems :'center' ,
})
export const SC = styled(Box)({
    display :'flex' , 
    alignItems :' ' ,
    flexDirection :'column'
})


export const Nvbar = styled(Box)(({theme})=>({
    padding : "0px 7.5vw" , 
    height :'12vh' , 
    display :'flex' , 
    alignItems :'center' ,
    justifyContent : 'space-between' ,
    boxShadow: '-3px 5px 251px -28px rgba(0,0,0,0.75)',
    [theme.breakpoints.down('sm')] :{
        justifyContent : 'space-between' ,
        padding : "0px 20px" , 
        height :'10vh' ,
    }
}))

export const MyList = styled(Box)(({theme , s})=>({
    display :'flex' , 
    alignItems :'center' ,
    [theme.breakpoints.down('sm')] :{
            flexDirection : 'column' , 
            position : 'absolute' , 
            height : '100vh' , 
            top : '0px' , 
            right :'0px' , 
            justifyContent :'center' ,
            gap : '2cm' , 
            background : 'whitesmoke' , 
            width : '80vw' , 
            scale : `${s ? 1 : 0} 1` , 
            transition : '0.4s' , 
            transformOrigin : 'right',
            zIndex : 2
    }
}))

export const MyHero = styled(Box)(({theme})=>({
    height :'88vh' , 
    display :'flex' , 
    width :'85vw' , 
    margin : 'auto' , 
    alignItems :'center' ,
    justifyContent : 'space-around' ,
    [theme.breakpoints.down('sm')] :{
        justifyContent : 'center' ,
        gap : '1cm' , 
        textAlign : 'center' ,
        flexDirection : 'column-reverse' , 
        padding : "1cm" , 
        width :'100vw' , 
        
        
        
    }
}))

export const ColoredText = styled('span')(({theme})=>({
        color :theme.palette.primary.main
}))


export const Aboutme = styled(Box)(({theme})=>({
    boxShadow : '-3px 5px 50px -28px rgba(0,0,0,0.75)' , 
    display :'flex' , 
    width :'85vw' , 
    margin :' 3cm auto' , 
    // margin : 'auto' , 
    // padding : '2cm' ,
    alignItems :'center' ,
    justifyContent : 'space-betwee' ,
    [theme.breakpoints.down('sm')] :{
        flexDirection : 'column' ,
        justifyContent : 'center' ,
        gap : '1cm' , 
        textAlign : 'left' ,
        padding : " 2cm 1cm " ,
        width :'100vw' , 
        margin :' 0cm auto' , 
        
        
    }
}))

export const ProcessSec = styled(Grid)(({theme})=>({
    // boxShadow : '-3px 5px 50px -28px rgba(0,0,0,0.75)' , 
    height : '' , 
    display :'flex' , 
    width :'85vw' , 
    margin :' 2cm auto' , 
    // margin : 'auto' , 
    // padding : '2cm' ,
    alignItems :'center' ,
    justifyContent : 'space-between' ,
    [theme.breakpoints.down('sm')] :{
        // flexDirection : 'column' ,
        justifyContent : 'center' ,
        gap : '1cm' , 
        textAlign : 'center' ,
        height : 'fit-content' , 
        width :'100vw' , 
        margin :' 4cm auto' , 
        
        
    }
}))


export const ProcessCard = styled(Grid)(({theme})=>({
    boxShadow : '0px 10px 80px -34px rgba(0,0,0,0.3)' , 
    display :'flex' , 
    alignItems :'center' ,
    textAlign :'center' ,
    flexDirection :'column',
background : "white" , 
    [theme.breakpoints.down('sm')] :{
        gap : '1cm' , 
        alignItems :'center' ,
        
        
    }
}))




export const Services = styled(Grid)(({theme})=>({
    // boxShadow : '-3px 5px 50px -28px rgba(0,0,0,0.75)' , 
    // background :  , 
    height : '100vh' , 
    display :'flex' , 
    width :'85vw' , 
    margin :'  auto' , 
    alignItems :'center' ,
    justifyContent : 'space-between' ,
    [theme.breakpoints.down('sm')] :{
        // flexDirection : 'column' ,
        justifyContent : 'center' ,
        gap : '1cm' , 
        textAlign : 'center' ,
        height : 'fit-content' , 
        width :'100vw' , 
        margin :' auto' , 
        padding :'2cm 0px'
        
    }
}))

export const Idea = styled(Box)(({theme})=>({
    // boxShadow : '-3px 5px 50px -28px rgba(0,0,0,0.75)' , left
    textAlign :"center" , 
    width : '50%' , 
    display :'flex' , 
    flexDirection :'column' , 
    alignItems : 'center' ,
    
    [theme.breakpoints.down('sm')] :{
        width : '90%' , 
    }
}))


export const Schedule = styled(Grid)(({theme})=>({
    // boxShadow : '-3px 5px 50px -28px rgba(0,0,0,0.75)' , 
    // background :  , 
    // height : '100vh' , 
    padding : "2cm" ,
    display :'flex' , 
    width :'85vw' , 
    margin :'  auto' , 
    marginTop : '2cm' , 
    alignItems :'' ,
    justifyContent : 'space-between' ,
    [theme.breakpoints.down('sm')] :{
        // flexDirection : 'column' ,
        justifyContent : 'center' ,
        gap : '1cm' , 
        textAlign : 'center' ,
        height : 'fit-content' , 
        width :'100vw' , 
        margin :' auto' , 
        marginTop : '0cm' ,  
        padding :'2cm 0px'
        
    }
}))


export const Icon = styled(Box)(({normal , theme})=>({
    display :'flex' , 
    alignItems :'center' ,
    justifyContent :'center',
    height : '48px' ,
    aspectRatio : '1/1' ,
    borderRadius : 4
    
    // backgroundColor : normal ? purple[50] : purple[500] ,
    // color : !normal ? purple[50] : purple[500]
    
}))


export const MyFooter = styled(Box)(({theme})=>({
   gap : '40px' , 
    display :'flex' ,  
    alignItems :'center' ,
    justifyContent : 'space-between' ,
    [theme.breakpoints.down('sm')] :{
        flexDirection :'column' ,
    }
}))

export const Line = styled(Box)(({theme})=>({
   width  :'2cm' , 
   height : '4px',
   background : theme.palette.primary.main

 }))

 export const ProjectImg = styled(Box)(({theme , url})=>({
    width  :'100%' , 
    aspectRatio :'1/1', 
    background : `url(${url})`, 
    backgroundSize :'cover' ,
    // borderTopLeftRadius : "15px" , 
    // borderTopRightRadius : "15px" , 
 
  }))
 

  export const MLink = styled(Link)(({theme})=>({
    color :'inherit' , 
    textDecoration : 'none' , 
    // paddingBottom : "30px" ,
    // marginBottom :'-30px'
    ':hover' : {
        color : theme.palette.primary.main , 
        transition : '0.25s'
    },
    ':active' : {
        color : theme.palette.primary.main , 
        transition : '0.25s',
       borderBottom : `2px solid ${theme.palette.primary.main}`,

    },

 
  }))
 


  export const ServicePage = styled(Grid)(({theme})=>({
    
    display :'flex' , 
    width :'85vw' , 
    margin :' 1cm auto' , 
    alignItems :'start' ,
    justifyContent : '' ,
    [theme.breakpoints.down('sm')] :{
        height : 'fit-content' , 
        width :'100vw' , 
        
        
    }
}))