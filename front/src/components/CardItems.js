import React from 'react';
import { Box, Typography } from '@material-ui/core'

function Card(props) {

    const style = {
        width : '100%',
        height : '80%',
        backgroundColor : 'blue',
        borderRadius : '18px 18px 0px 0px'
    }

  return(
        <div style={{ width : 180, height : 180, backgroundColor : 'white', borderRadius : 18, margin : 20, flexShrink : 0 }}>
            <Box sx={style} />
            <Typography style={{textAlign : 'center', marginTop : 5}}>{props.name}</Typography>
        </div>
  );
}

export default Card;