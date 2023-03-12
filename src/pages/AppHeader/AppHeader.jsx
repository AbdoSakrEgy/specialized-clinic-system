import React from "react";
import { Outlet } from "react-router-dom";
import Media from "./Media";
import NavBar from "./NavBar";

const AppHeader = (props) => {
    
    return ( 
        <React.Fragment>
            {/* -------media header------- */}
            <Media/>
            {/* -------navbar------- */}
            <NavBar userData={props.userData}/>
            {/* -------outlet------- */}
            <Outlet/>
        </React.Fragment>
     );
}
 
export default AppHeader;