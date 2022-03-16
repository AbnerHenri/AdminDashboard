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
        textDecoration : 'none',
        color : 'black',
        display : 'flex',
        alignItems : 'center',
        cursor : 'pointer',
        margin : 15,
        marginBottom : 25,
        padding : 15,
        fontSize : 25,
    },

    SidebarIcons : {
        width : 50,
        marginRight : 15,
        marginLeft : -10,
    }
})

export default useStyles;