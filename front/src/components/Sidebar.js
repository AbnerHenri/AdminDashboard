import React from 'react';

import useStyles from './styles/SidebarStyles';
import { Typography } from '@material-ui/core';
import Category from '../assets/Category.png'
import Products from '../assets/Products.png'
import Brands from '../assets/Brands.png'


function Sidebar(){

    const classes = useStyles()

    return(
    <div>
        <div className={classes.SideBar}>
            <div className={classes.LinkPages} onClick={()=> window.location.href='/dashboard/category'}>
                <img src={Category} className={classes.SidebarIcons} alt='Categorias'/>
                <Typography style={{fontSize : 20, color : '#023e8a'}}>Categorias</Typography>
            </div>

            <div className={classes.LinkPages} onClick={()=> window.location.href='/dashboard/products'}>
                <img src={Products} className={classes.SidebarIcons} alt='Produtos'/>
                <Typography style={{fontSize : 20, color : '#023e8a'}}>Produtos</Typography>
            </div>

            <div className={classes.LinkPages} onClick={()=> window.location.href='/dashboard/brands'}>
                <img src={Brands} className={classes.SidebarIcons} alt='Marcas'/>
                <Typography style={{fontSize : 20, color : '#023e8a'}}>Marcas</Typography>
            </div>
        </div>
    </div>
    )
}

export default Sidebar;