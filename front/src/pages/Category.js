import { React, useState } from "react";
import Sidebar from "../components/Sidebar";

import { Box, Modal, TextField } from '@material-ui/core'

function Category(){

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const style = {
        display :   'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        padding : 50,
        backgroundColor : 'white',
        boxShadow: 24,
    }

    return(
        <div>    
            <Sidebar />
            <h1 style={{marginLeft : 700, color : 'white'}}>Categorias</h1>
            <button onClick={handleOpen} style={{marginLeft : 700}}>Adicionar Categoria</button>
            <Modal open={open} onClose={handleClose}>
                <Box>
                <form style={style}>
                    <TextField style={{marginTop : 15}} name ='category' id="filled-basic" type={'text'} label="Categoria" variant="filled" />
                    <TextField style={{marginTop : 15}} name='category_description' type={'text'} id='filled-basic' label='Descrição' variant='filled' />
                </form>
                </Box>
            </Modal>
        </div>
    )
}

export default Category;