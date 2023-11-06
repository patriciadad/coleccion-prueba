import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/storelogin";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { AppBar, Container, Toolbar, Grid, Typography, Button } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';

function Topbar(){
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    //Quiero obtener el nombre y el rol del usuario que está ahora mismo en el sistema
    //Para ello voy al store del redux y obtengo dichos datos, además del
    //isAuthenticated. Para eso uso el hook userSelector()
    //Cojo los datos que están dentro del reducer y los almeceno en userData, que ahora tendrá
    //el nombre y el rol del usuario
   const userData = useSelector(state => state.login)
   
   console.log(userData)

   const isLoggedin = userData.isAutenticated

    useEffect(() => {
        
        if (!isLoggedin) {
            navigate('/')
        }
        
    }, [isLoggedin, navigate])
    
     //Cuando piquemos el botón, saldremos de la aplicación, así que tendremos que
    // poner en el store que estamos en logout y navegate('/')
    const handleLogout = () => {
        dispatch(loginActions.logout())
        navigate('/')

    }

 
    

return <>
<AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar >
            <Grid container>
            <Grid item xs={12} md={2}>
            <AdbIcon  />
          
          
          
          <Typography
            variant="h4"
            noWrap
            sx={{ display: 'inline' }}
          >
            {userData.userName}
          </Typography>
          </Grid>
          <Grid item xs={12} md={2}>  
          <Link to={'/home'} sx={{textDecoration:'none'}}>Inicio</Link>
          </Grid>
          <Grid item xs={12} md={2}>  
          <Link to={'/informes'}>Informes</Link>
          </Grid>
          <Grid item xs={12} md={4} >  
          <Link to={'/GuiaUsuario.pdf'} target='_blank'>Ayuda</Link>
          </Grid>

          <Grid item xs={12} md={2} sx={{textAlign:'right'}}>  
          <Button
            variant = 'contained' 
            type = 'button'
            color = 'error'
            onClick = {handleLogout}
          >
            Salir  
         </Button>  
         </Grid>
         </Grid>
        </Toolbar>
      </Container>
    </AppBar>


</>

}

export default Topbar