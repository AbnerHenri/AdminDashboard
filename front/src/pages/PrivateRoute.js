import React from "react";

import { Navigate } from 'react-router-dom'
import { isAutheticated } from "./Auth";

const PrivateRoute = ({ children, redirectTo }) => {
    return isAutheticated() ? children : <Navigate to={redirectTo} />
}

export default PrivateRoute;