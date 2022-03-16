import { React, useState } from "react";
import Sidebar from "../components/Sidebar";

import { Box, Modal, TextField } from '@material-ui/core'

function Brands(){

        const [open, setOpen] = useState(false)
        const handleOpen = () => setOpen(true)
        const handleClose = () => setOpen(false)
    
        const style = {
            display :   'flex',
            flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'center',
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
            <h1 style={{marginLeft : 700, color : 'white'}}>Marcas</h1>
            <button onClick={handleOpen} style={{marginLeft : 700}}>Adicionar Marca</button>
            <Modal open={open} onClose={handleClose}>
                <Box style={style}>
                <form>
                    <TextField style={{marginTop : 5}} name='brand' id="filled-basic" type={'text'} label="Marca" variant="filled" />
                </form>
                </Box>
            </Modal>
        </div>
    )
}

export default Brands;