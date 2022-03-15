import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";

import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

import Products from './Products'
import Category from "./Category";
import Brands from './Brands'

function MainRoutes(){
    return(
<BrowserRouter>

    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/dashboard' element={<PrivateRoute redirectTo='/login'><Dashboard /></PrivateRoute>}>
            <Route path='category' element={<Category />} />
            <Route path='products' element={<Products />} />
            <Route path='brands' element={<Brands />}/>
        </Route>
        
    </Routes>
</BrowserRouter>
    )
}

export default MainRoutes;