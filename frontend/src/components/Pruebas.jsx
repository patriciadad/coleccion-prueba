import React from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box';
import { Container, Typography, Grid, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import './Pruebas.css'


function Pruebas () {

    return <>

    <Grid container component='main' className = 'contenedor'>
        <Grid className = 'paper'
         item 
         component = {Paper}
         elevation = {3}
         
         square = {true}
         xs = {12}
         sm = {12}
         md = {6}
         
         >
        
            <Typography variant='h4' component='h1'>
                Lo de aquí abajo es un botón

            </Typography>
            <Button variant = 'outlined'>
                BOTÓN
            </Button>
            



        </Grid>

    </Grid>
    </>
}

export default Pruebas