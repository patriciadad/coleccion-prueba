import React from 'react'
import Dashboard from './Dashboard'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../store/storelogin'
import { Button, Grid} from '@mui/material'
import { useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Topbar from './Topbar'




function Home() {

    return <> 

    {/*<AppBar position='static'>
      <Toolbar>
        <AdbIcon />
        <Typography>User Name</Typography>
        <Link to='/home'>Inicio</Link>
        <Button variant='contained'>Boton LOGOUT</Button>
      </Toolbar>

  </AppBar>*/}

    <Topbar></Topbar>
     
    <Dashboard></Dashboard>
    </>
}




export default Home

{/*
function Home() {

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
    
    
    //console.log(isLoggedin)
    //if (!isLoggedin){
    //    navigate('/')
    //}

    
    //Cuando piquemos el botón, saldremos de la aplicación, así que tendremos que
    // poner en el store que estamos en logout y navegate('/')
    const handleLogout = () => {
        dispatch(loginActions.logout())
        navigate('/')

    }
    return <> 
    <h1>Página de Home de Patricia Henríquez Rodríguez</h1> 
    <h2>Nombre usuario: {userData.userName} Rol: {userData.userRol} </h2>
    <Button 
    variant = 'outlined' 
    type = 'button'
    onClick = {handleLogout}
    >
        Salir
    </Button>
    
    </>
}

export default Home*/}


