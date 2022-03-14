import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";

import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function MainRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='/dashboard' element={<PrivateRoute redirectTo='/login'><Dashboard /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes;