import { Button, Box, TextField, Paper, Container, Dialog, DialogTitle, DialogContent, DialogActions, Grid} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import { Table, TableContainer, TableHead, TableCell, TableRow, TableBody, TableContent} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import React from "react";
import { useState } from "react";


const itemInitialState = {
    nombre: '',
    marca: '',
    tipo: '', 
    precio: ''
}


function Dashboard(){
    
    const [item, setItem] = useState(itemInitialState)
    const [refetch, setRefetch] = useState('false')
    const [tableData, setTableData] = useState([])
    console.log(tableData)
    
    const handleSaveItem = (e) => {
        //Para que no mande el formulario, sino que haga lo que yo le diga
    e.preventDefault();
    
    fetch(`http://localhost:3030/addItem?id=${item.id}&nombre=${item.nombre}&marca=${item.marca}&tipo=${item.tipo}&precio=${item.precio}`)
    .then(response => response.json())
    .then(response => {
        if (response>0){
            setItem(itemInitialState)
            alert('Datos guardados con éxito')
            //<MuiAlert>Datos insertados con éxito</MuiAlert>
            fetch(`http://localhost:3030/getItems`)
            .then(res => res.json()) 
            .then(res => {

                setTableData(res.data)
            })
        }
    })
}

const handleDeleteItem = (data)=> {
    console.log(data.id)
    fetch(`http://localhost:3030/deleteItem?id=${data.id}`)
    .then(response => response.json())
    .then(response => {
        if (response>0){
            console.log(response)
            alert('Datos borrados con éxito')
            //<MuiAlert>Datos borrados con éxito</MuiAlert>
            fetch(`http://localhost:3030/getItems`)
            .then(res => res.json()) 
            .then(res => {

                setTableData(res.data)
            })
        }
    })

}
    const handleRefetch = () => {
        if (refetch) {
        fetch(`http://localhost:3030/getItems`)
        .then(response => response.json())
        console.log('estoy en get')
        .then(response => {
            
            
            setTableData(response.data)
            setRefetch(false)
            
        })
        }
    }
   /* if (setRefetch){
        fetch(`http://localhost:3030/getItems`)
        .then(response => response.json())
        console.log('estoy en get')
        .then(response => {
            
            
            setTableData(response.data)
            setRefetch(false)
            
        })

    }*/
    return <>
    <Paper elevation={3} sx={{mb:'25px'}}>
    <Box  component='form' autoComplete='off' onSubmit={handleSaveItem} >
    <Grid container spacing={2} sx={{mt:'20px'}}>
        <Grid item xs={12} md={3} sx={{textAlign:'center'}}> 
            <TextField
                label='Nombre'
                required
                value={item.nombre}
                onChange={(event) => setItem({...item, nombre: event.target.value })} 
            >

            </TextField>
        </Grid>
        <Grid item xs={12} md={3} sx={{textAlign:'center'}}> 
            <TextField
                label = 'Marca'
                required
                value={item.marca}
                onChange={(event) => setItem({...item, marca: event.target.value })} 
            >

            </TextField>
        </Grid>
        <Grid item xs={12} md={3} sx={{textAlign:'center'}}> 
            <TextField
                label='Tipo'
                required
                value={item.tipo}
                onChange={(event) => setItem({...item, tipo: event.target.value })} 
                >

            </TextField>
        </Grid>
        <Grid item xs={12} md={3} sx={{textAlign:'center'}}>
            <TextField
             label='Precio'
             required
              value={item.precio}
             onChange={(event) => setItem({...item, precio: event.target.value })} 
             >
             </TextField>

        </Grid>
        <Grid item xs={12} sx={{textAlign:'center'}}>
        <Button sx={{textAlign:'center', bgcolor:'black', color:'white'}} variant='outlined' type='submit'> 
            + INSERTAR DATOS
        </Button>
        </Grid>
    </Grid>
    </Box>
    </Paper>
        
    
    
        <TableContainer component={Paper} sx={{mb:'25px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="Tabla resultados">
        <TableHead>
            <TableRow>
                <TableCell sx={{bgcolor:'black'}}></TableCell>
                <TableCell sx={{bgcolor:'black', color:'white'}}>Nombre</TableCell>
                <TableCell sx={{bgcolor:'black', color:'white'}}>Marca</TableCell>
                <TableCell sx={{bgcolor:'black', color:'white'}}>Tipo</TableCell>
                <TableCell sx={{bgcolor:'black', color:'white'}}>Precio</TableCell>
                <TableCell sx={{bgcolor:'black', color:'white'}}></TableCell>
                
            </TableRow>
        </TableHead>
        <TableBody>
            {tableData
                .map((row) => (
                
                <TableRow key={row.id}>
                    <Button onClick={() => handleDeleteItem(row)}>
                            <DeleteForeverIcon />
                    </Button>
                    <TableCell>{row.nombre}</TableCell>
                    <TableCell>{row.marca}</TableCell>
                    <TableCell>{row.tipo}</TableCell>
                    <TableCell>{row.precio}</TableCell>
                    

                </TableRow>

      
            ))}


        </TableBody>
        </Table>
      </TableContainer>
        


    </>

}

export default Dashboard


/*<Dialog open={open} onClose={handleCloseDialog} maxWidth='lg'>
            <DialogTitle>Añadir nuevo registro</DialogTitle>
            <DialogContent>
                
            </DialogContent>
            <DialogActions>
                <Button  variant='outlined' onClick={handleCloseDialog}> Cancelar </Button>
                <Button  variant='outlined' onClick={handleSaveItem}> Añadir </Button>
                
            </DialogActions>
        </Dialog>
*/



{/*


    
    
    const [open, setOpen] = useState(false)
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [refetch, setRefetch] = useState(false)

    const [item, setItem] = useState(itemInitialState)
    const handleOpenDialog = () => {
        setOpen(true)    

    }
    const handleCloseDialog = () => {
        setOpen(false)    

    }

    const handleSaveItem = () => {
        setOpen(false)
        fetch(`http://localhost:3030/addItem?nombre=${item.nombre}&tipo=${item.tipo}&marca=${item.marca}&precio=${item.precio}`)
            .then(response => response.json())
            .then(data => {
                if (data > 0) 
                setRefetch(true)
            })
    }



    return <>
       

        <Container>
        <Button variant='outlined' onClick={handleOpenDialog}> 
            + INSERTAR DATOS
        </Button>

        
        </Container>
    
    
    </>

*/}