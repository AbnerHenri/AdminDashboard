import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Container, Typography } from '@material-ui/core'
import useStyles from './styles/PageProductStyle'
import Image from '../assets/Product.png'

function PageProducts() {

    const params = useParams()
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
            </div>
          </Container>
      </div>
  )
}

export default PageProducts;