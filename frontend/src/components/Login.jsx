import React from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box';
import { Container, Typography, Grid, Paper, TextField } from '@mui/material';
import { useState } from 'react';


function Login () {

  const [user, setUser] = useState({login:'', password:''})

  const isVerifiedUser = () => {
    fetch(`http://localhost:3030/login?user=${user.login}&password=${user.password}`)
    .then(response => response.json())
    .then(response => {
        if (response) {
          console.log(response)   
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
