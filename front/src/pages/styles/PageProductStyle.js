import { makeStyles, withTheme } from "@material-ui/core";

const useStyles = makeStyles({
    container : {
        width : "100%",
        height : '100%',
        color : 'white',
        display : 'flex',
        justifyContent : 'center'
    },

    icons : {
        position : "absolute",
        top : 150,
        left : 300
    },

    icon : {
        width : 260,
        height : 260,
        border : '1px solid gray',
        marginRight : 10,
        padding : 10,
    },

    specifies : {
        position : 'absolute',
        top : 250,
        right : 200,
    },

    description : {
        position : 'absolute',
        top : 450,
        left : 300,
    }, 

    delButton : {
        position : 'relative',
        left : 400,
        top : 50,
        width : 150,
        height : 60,
    },

    Buttons : {
        width : '100%',
        height : '100%',
        display : 'flex',
        justifyContent : 'space-around',
        alignItems : 'center'
    },

    IndButton : {
        width : 120,
        height : 45,
    },

    modal : {
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
    },

    delMessage : {
        margin : 'auto',
        marginBottom : 60
    }

})

export default useStyles;