import React from 'react';

import useStyles from './styles/SidebarStyles';
import { Link } from '@material-ui/core';

import Category from '../assets/Category.png'
import Products from '../assets/Products.png'
import Brands from '../assets/Brands.png'


function Sidebar(){

    const classes = useStyles()

    return(
    <div>
        <div className={classes.SideBar}>
            <div className={classes.LinkPages}>
                <img src={Category} className={classes.SidebarIcons} alt='Categorias'/>
                <Link href='/dashboard/category'>Categorias</Link>
            </div>

            <div className={classes.LinkPages}>
                <img src={Products} className={classes.SidebarIcons} alt='Produtos'/>
                <Link href='/dashboard/products'>Produtos</Link>
            </div>

            <div className={classes.LinkPages}>
                <img src={Brands} className={classes.SidebarIcons} alt='Marcas'/>
                <Link href='/dashboard/brands'>Marcas</Link>
            </div>
        </div>
    </div>
    )
}

export default Sidebar;