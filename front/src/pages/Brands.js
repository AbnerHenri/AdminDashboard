import { React, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import useStyles from "./styles/GlobalStyles";
import { Box, Button, Modal, TextField } from '@material-ui/core'
import Card from "../components/CardItemForBrand";

function Brands(){

        const classes = useStyles()

        const [show, setShow] = useState([])
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

        useEffect(()=>{
            fetch('/dashboard/brands')
                .then(res => res.json())
                .then( data => {
                    setShow(data)
                    console.log(data)
                })
               
        },[])

        function refresh(){
            setTimeout(() => {
                handleClose()
                window.location.reload()
            }, 1000);
        }

    return(
        <div>
            <Sidebar />
            <h1 style={{marginLeft : 700, color : 'white'}}>Marcas</h1>
            <Button onClick={handleOpen} style={{marginLeft : 680}} variant='contained'>Adicionar Marca</Button>
            <Modal open={open} onClose={handleClose}>
                <Box>
                <form style={style} action='/dashboard/brands' method="POST">
                    <TextField style={{marginTop : 5}} name='name' id="filled-basic" type={'text'} label="Marca" variant="filled" />
                    <Button type={'submit'} variant='contained' color='primary' style={{marginTop : 25, width : 250}} onClick={()=> refresh()}>Enviar</Button>
                </form>
                </Box>
            </Modal>

            <div className={classes.Items}>
                {show.map( e => <Card name={e.name} id={e.id}/>)}
            </div>
        </div>
    )
}

export default Brands;