import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    Items : {
        margin : 15,
        display : 'flex',
        marginLeft : '25%',
        overflow : 'auto',
        flexWrap : 'wrap',
        width : '70%',
        height : 500,
        '&::-webkit-scrollbar': {
            width: 18,
          },
          '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#9A9483',
            borderRadius : 15,
            outline: '1px solid slategrey'
          }
    },

    "@global" : {
        body : {
            backgroundColor : '#457b9d'
        }
    }

})

export default useStyles;