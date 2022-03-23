import { React } from 'react';
import { Box, Typography } from '@material-ui/core'
import Question from '../assets/Question.png'
import { useNavigate } from 'react-router-dom'

function CardProducts(props) {

    const navigate = useNavigate()


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


  return(
        <div style={styleCard} id={props.id} onClick={()=> navigate(`/dashboard/products/${props.id}`)}> 
            <Box sx={styleBox} />
            <Typography style={{textAlign : 'center', marginTop : 5}}>{props.name}</Typography>
        </div>
  );
}

export default CardProducts;