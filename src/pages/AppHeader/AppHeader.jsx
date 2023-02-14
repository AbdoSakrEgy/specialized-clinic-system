import React from "react";
import { Outlet } from "react-router-dom";
import Media from "./Media";
import NavBar from "./NavBar";

const AppHeader = () => {
    
    return ( 
        <React.Fragment>
            {/* -------media header------- */}
            <Media/>
            {/* -------navbar------- */}
            <NavBar/>
            {/* -------outlet------- */}
            <Outlet/>
        </React.Fragment>
     );
}
 
export default AppHeader;