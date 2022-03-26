import { React, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import CardCategory from "../components/CardItemForCategory";
import useStyles from "./styles/GlobalStyles";
import { Box, Button, Modal, TextField } from '@material-ui/core'

function Category(){

    const classes = useStyles()

    const [show, setShow] = useState([])
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

    useEffect(()=>{
        fetch('/dashboard/category')
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
            <h1 style={{marginLeft : 700, color : 'white'}}>Categorias</h1>
            <Button onClick={handleOpen} style={{marginLeft : 680}} variant='contained'>Adicionar Categoria</Button>
            <Modal open={open} onClose={handleClose}>
                <Box>
                <form style={style} action='/dashboard/category' method="POST">
                    <TextField style={{marginTop : 15}} name ='name' id="filled-basic" type={'text'} label="Categoria" variant="filled" />
                    <TextField style={{marginTop : 15}} name='description' type={'text'} id='filled-basic' label='Descrição' variant='filled' />
                    <Button type={'submit'} variant='contained' color='primary' style={{marginTop : 25}} onClick={()=> refresh()}>Enviar</Button>
                </form>
                </Box>
            </Modal>

            <div className={classes.Items}>
                {show.map( e => <CardCategory name={e.name} description={e.description} id={e.id} />)}
            </div>
        </div>
    )
}

export default Category;