import { createTheme , responsiveFontSizes } from "@mui/material";

const myTheme = createTheme({

    palette : {
        primary : {
            main : '#008B74'
            
        } , 
        secondary : {
            main : '#052e37'
        } ,
        info : {
            main : 'rgba(255, 255, 255, 1)'
        } ,
        
    } ,
    components : {
        MuiButton : {
            styleOverrides : {
                root : {
                    /////////style
                    borderRadius :4 , 
                    padding : "9px 30px",
                    textTransform :'none',
                    fontFamily : 'Poppins',


                }
            }
        } , 
         
        MuiTypography :{
            styleOverrides :{
                root : {
                    fontFamily : 'Poppins',
                }
            }
        }
    
    }
})

export default responsiveFontSizes(myTheme)