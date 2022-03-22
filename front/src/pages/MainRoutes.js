import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Dashboard from "./Dashboard";
import Products from './Products'
import Category from "./Category";
import Brands from './Brands'

function MainRoutes(){
    return(
<BrowserRouter>

    <Routes>
        <Route path='/dashboard' element={<Dashboard />}>
            <Route path='category' element={<Category />} />
            <Route path='products/:id' />
            <Route path='products' element={<Products />} />
            <Route path='brands' element={<Brands />}/>
        </Route>
        
    </Routes>
</BrowserRouter>
    )
}

export default MainRoutes;