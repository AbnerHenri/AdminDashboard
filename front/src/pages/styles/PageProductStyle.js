import { makeStyles } from "@material-ui/core";

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
    }

})

export default useStyles;