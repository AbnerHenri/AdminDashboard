import { React, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Container, Typography, Modal, Box } from '@material-ui/core'
import useStyles from './styles/PageProductStyle'
import Image from '../assets/Product.png'

function PageProducts() {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const params = useParams()
    const navigate = useNavigate()
    const classes = useStyles()

    const [products, setProducts] = useState([])

        useEffect(()=> {

                fetch('/dashboard/products')
            .then( response => response.json() )
            .then( data => {
                setTimeout(() => {
                    setProducts(data.filter( e => e.id == params.id)[0])
                }, 100); 
            })

        }, [params])

        function Delete(id){
            fetch('/dashboard/products/' + id, {method : 'DELETE'})
            navigate('/dashboard/products')
        }

  return(
      <div>
          <Container maxWidth='md'>
            <div className={classes.container}>
                <h1>{products.name}</h1>

                <div className={classes.icons}>
                    <img src={Image} alt='Image1' className={classes.icon}/>
                    <img src={Image} alt='Image2' className={classes.icon}/>
                </div>

                <div className={classes.specifies}>
                    <Typography variant='h5'>Categoria : {products.category}</Typography>
                    <Typography variant='h5'>Marca : {products.brand}</Typography>
                    <Typography variant='h5'>Em Estoque : {products.inventory}</Typography>
                    <Typography variant='h4' style={{paddingTop : 10}}>R${products.price}</Typography>
                </div>

                <div className={classes.description}>
                    <Typography variant='h3'>Descrição</Typography>
                    <Typography variant='h6'>{products.description}</Typography>
                </div>

                <Button className={classes.delButton} variant='contained' color='danger' onClick={handleOpen}>Deletar Produto</Button>

                <Modal open={open} onClose={handleClose}>
                    <Box>
                        <div className={classes.modal}>
                            <Typography className={classes.delMessage} variant='h5'>Deseja mesmo deletar o produto?</Typography>
                            <div className={classes.Buttons}>
                                <Button className={classes.IndButton} variant='contained' onClick={()=> Delete(params.id)}>Sim</Button>
                                <Button className={classes.IndButton} variant='contained' onClick={handleClose}>Não</Button>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
          </Container>
      </div>
  )
}

export default PageProducts;