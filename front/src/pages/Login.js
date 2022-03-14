import { React } from "react";
import useStyles from "./styles/LoginAndRegisterStyle";
import PersonOutlined from '@material-ui/icons/PersonOutlined';

import { Button, Container, Typography, Link } from '@material-ui/core'
import { TextField } from '@material-ui/core'

function Login(){

    const classes = useStyles()

    return(
       <Container maxWidth='lg'>
           <div className={classes.ContainerLogin}>
                <div className={classes.ImageCover}></div>

            <form noValidate autoComplete="of" className={classes.FormLogin}>
                <PersonOutlined style={{ fontSize : 80 }} />
                <Typography variant='h5'>Login</Typography>
                <TextField style={{marginTop : 25}} id="filled-basic" type={'email'} label="Email" variant="filled" />
                <TextField style={{marginTop : 25, marginBottom : 25}} type={'password'} id='filled-basic' label='Password' variant='filled' />
                <Button variant='contained' color='primary'>Enviar</Button>
                <Typography style={{margin:30, marginBottom:10, display:'block'}} >Ainda não possui uma conta?</Typography>
                <Link href='./register'>Cadastre-se </Link>
            </form>
           </div>
       </Container>
    )
}

export default Login;