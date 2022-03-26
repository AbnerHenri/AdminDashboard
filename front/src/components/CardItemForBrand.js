import { React, useState } from 'react';
import { Box, Typography, Modal, Button } from '@material-ui/core'
import Question from '../assets/Question.png'

function Card(props) {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const styleBox = {
        backgroundImage : `url("${Question}")`,
        backgroundRepeat : 'no-repeat',
        backgroundSize : '70%',
        backgroundPosition : 'center',
        width : '100%',
        height : '80%',
        backgroundColor : 'white',
        borderRadius : '18px 18px 0px 0px',
    }

    const styleCard = {
        boxShadow : '2px 2px 5px 2px',
        width : 180,
        height : 180,
        backgroundColor : 'white',
        borderRadius : 18,
        margin : 20,
        flexShrink : 0 
    }

    const styleModal = {
        display :   'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        textAlign : 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        padding : 50,
        backgroundColor : 'white',
    }

    function deleteBrand(id){
        setTimeout(() => {
            fetch(`/dashboard/brands/${id}`, { method : 'DELETE'})
            window.location.reload()
        }, 300);
    }

  return(
    <>
        <div style={styleCard} id={props.id} onClick={handleOpen}> 
            <Box sx={styleBox} />
            <Typography style={{textAlign : 'center', marginTop : 5}}>{props.name}</Typography>
        </div>

        <Modal open={open} onClose={handleClose}>
            <div style={styleModal}>
                <Typography style={{marginBottom : 35}}>Deseja deletar esta marca?</Typography>
                <Button variant='contained' color='primary' onClick={()=> deleteBrand(props.id)}>Deletar</Button>
            </div>
        </Modal>
    </>
  );
}

export default Card;