import React from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box';
import { Container, Typography, Grid, Paper, TextField } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginActions } from '../store/storelogin';

function Login () {

  const dispatch = useDispatch()
  //login y password del usuario: esto lo introduce el usuario en el frontend
  const [user, setUser] = useState({login:'', password:''})
  //name y rol del usuario: esto serán datos que provengan de la base de datos
  //const [userData, setUserData] = useState({name:'', role:''})
  //isLoggedIn será true cuando el usuario haya introducido login y password correctos
  //const [isLoggedIn, setIsLoggedIn] = useState(false)

  //hook para navegar de la página principal / a la página /home cuando
  //hayamos verificado que al llamar a la base de datos existe el usuario con el login
  //y password introducidos en el frontend
  const navigate = useNavigate()

  const isVerifiedUser = () => {
    fetch(`http://localhost:3030/login?user=${user.login}&password=${user.password}`)
    .then(response => response.json())
    .then(response => {
        if (response) {
          //Si hay respuesta de la base de datos, paso el nombre y el rol
          //al objeto UserData. La respuesta puede tener el nombre y rol porque
          //los ha encontrado en la base de datos. Y si no los ha encontrado,
          //tendrá los valores undefined tanto en nombre como en rol
          //setUserData({name: response.data.nombre, role: response.data.rol})
          console.log(response.data.nombre) 
          console.log(response.data.rol)
          //Si el nombre está definido, es que sí ha encontrado
          //el nombre y rol en la base de datos. establezco a true el IsLoggedIn
          if (response.data.nombre !== undefined) {
            //console.log('entro')
            //aquí pongo el dispatch para cambiar el estado a login
            dispatch(loginActions.login({
              name: response.data.nombre,
              rol: response.data.rol
            }))
            
            navigate('/home')

          }
            
          //console.log(userData)
        }
    })

  }
  const handleSubmit = (e) => {
    //Para que no mande el formulario, sino que haga lo que yo le diga
    e.preventDefault();

    //Aquí habría que comprobar si hemos mandado algo
    isVerifiedUser()
    console.log(user)


  }
  return <>

<Grid container component='main' mt={15} justifyContent={'center'}>

  <Grid
    item
    xs={12}
    sm={12}
    md={6}
    component={Paper}
    square={false}
               
    sx={{
      textAlign: 'center',
      justifyContent: 'center',
      }}
  >

      
    <Typography 
      variant='h6'
      mt={5}
      border={4}
      bgcolor={'error.main'}

    >
      Sistema de acceso
    </Typography> 
      
    <Box
      component='form'
      onSubmit={handleSubmit}
      mt={5}
      
    >
      <TextField 
        required
        id='login'
        label='Usuario'
        variant='outlined'
        fullWidth
        autoFocus
         
        value={user.login}
        onChange={(event) => {setUser({...user, login: event.target.value})}}

        
      >
      </TextField>


      <TextField 
        required
        id='password'
        label='Contraseña'
        variant='outlined'
        type='password'
        fullWidth
        
         
        value={user.password}
        onChange={(event) => {setUser({...user, password: event.target.value})}}
      >
      </TextField>
      <Button
        type = 'submit'
        variant = 'outlined'
        fullWidth
      >
       Acceder
      </Button>
    </Box>
       
  </Grid>



</Grid>

   

    
  </>
  }

export default Login


    
     
    

/*
  return <Button
    onClick={() => {
    alert('clicked');
  }}
    >
  Click me
</Button>

<Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    
    import { Container, Typography } from '@mui/material';
    */


    






/*
    <Typography variant="h1" component="h2" color = "secondary">App con typography</Typography>
   
     
    <Button color="primary" variant="contained" startIcon={<DeleteIcon />}>Hello world</Button>
    <Button color="secondary" variant="text" startIcon={<DeleteIcon />}>Hello world</Button>

    <Button color="secondary" variant="outlined" startIcon={<DeleteIcon />}>Hello world</Button>
    </Container>
   
    <Container>
    <Typography variant="h1" component="h2" color = "primary">App con typography</Typography>
   
     
   <Button color="primary" variant="text" startIcon={<DeleteIcon />}>Hello world</Button>
   <Button color="secondary" variant="text" startIcon={<DeleteIcon />}>Hello world</Button>


    </Container>*/
