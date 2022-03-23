import { React, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import useStyles from "./styles/GlobalStyles";
import CardProduct from '../components/CardItemForProducts'
import { Box, Button, Modal, TextField } from '@material-ui/core'

function Products(){

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
            fetch('/dashboard/products')
                .then(res => res.json())
                .then( data => {
                    setShow(data)
                })
               
        },[])

        function refresh(){
            setTimeout(() => {
                handleClose()
                window.location.reload()
            }, 500);
        }


    return(
        <div>
            <Sidebar />
            <h1 style={{marginLeft : 700, color : 'white'}}>Produtos</h1>
            <Button onClick={handleOpen} style={{marginLeft : 680}} variant='contained'>Adicionar Produto</Button>
            <Modal open={open} onClose={handleClose}>
                <Box>
                <form style={style} action='/dashboard/products' method="POST">
                    <TextField style={{marginTop : 20}} name='name' id="filled-basic" type={'text'} label="Produto" variant="filled" />
                    <TextField style={{marginTop : 20}} name='description' type={'text'} id='filled-basic' label='Descrição' variant='filled' />
                    <TextField style={{marginTop : 20}} name='price' type={'text'} id='filled-basic' label='Preço' variant='filled' />
                    <TextField style={{marginTop : 20}} name='inventory' type={'text'} id='filled-basic' label='Estoque' variant='filled' />
                    <TextField style={{marginTop : 20}} name='category' type={'text'} id='filled-basic' label='Categoria' variant='filled' />
                    <TextField style={{marginTop : 20}} name='brand' type={'text'} id='filled-basic' label='Marca' variant='filled' />
                    <Button type={'submit'} variant='contained' color='primary' style={{marginTop : 25}} onClick={()=> refresh()}>Enviar</Button>
                </form>
                </Box>
            </Modal>

            <div className={classes.Items}>
                {show.map( e => <CardProduct name={e.name} id={e.id}/>)}

            </div>

                
        </div>
    )
}

export default Products;