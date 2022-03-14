import { makeStyles } from '@material-ui/core'
import Image from '../../assets/LoginBackground.png'

const useStyles = makeStyles({
    ContainerLogin : {
        display : 'flex',
        backgroundColor : 'white',
        boxShadow : '3px 3px 30px 1px rgba(0, 0, 0, 0.438)',
        height: '90vh',
        margin : 25,
        borderRadius: 18,
    },

    ImageCover : {
        borderRadius: 18,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        height : '100%',
        width : '65%',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
    },

    FormLogin : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        width: '35%',
        height : '100%',
        float : 'right'
    },

  
})

export default useStyles;