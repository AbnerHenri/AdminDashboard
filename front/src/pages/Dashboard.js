import React from "react";
import { Outlet } from "react-router";

import Sidebar from "../components/Sidebar";

function Dashboard(){

    return(
    <div>
        <Sidebar />
        <Outlet />
    </div>
    )
}

export default Dashboard;