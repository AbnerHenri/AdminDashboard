import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import useStyles from './styles/SidebarStyles';

import { Typography } from '@material-ui/core';

import { Inventory2 } from '@mui/icons-material'

function Sidebar(){

    const classes = useStyles()

    return(
        <Drawer anchor={'left'} variant={'permanent'}>
            <div className={classes.SideBar}>
                <Typography><Inventory2 />Produtos</Typography>
            </div>
        </Drawer>
    )
}

export default Sidebar;