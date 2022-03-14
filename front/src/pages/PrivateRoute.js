import React from "react";

import { Route, Navigate } from 'react-router-dom'
import { isAutheticated } from "./Auth";

const PrivateRoute = ({ children, redirectTo }) => {
    return isAutheticated() ? children : <Navigate to={redirectTo} />
}

export default PrivateRoute;