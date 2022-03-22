import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({

    

    SideBar : {
        position : 'absolute',
        top : 0,
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        backgroundColor : 'white',
        width : 230,
        height : '100%',
        padding : 10,
    },

    LinkPages : {
        position : 'relative',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        textDecoration : 'none',
        color : 'black',
        display : 'flex',
        cursor : 'pointer',
        margin : 5,
        marginLeft : 25,
        marginBottom : 25,
        padding : 15,
        fontSize : 20,
        width : 120,
        height : 120,
        border : '1px solid gray',
        borderRadius : 18,
        boxShadow : '2px 3px 10px 0px',

        '&:hover' : {
            transitionDuration : 500,
            position : 'relative',
            bottom : 20
        }
    },

    SidebarIcons : {
        width : 50,
        marginBottom : 20
    }
})

export default useStyles;