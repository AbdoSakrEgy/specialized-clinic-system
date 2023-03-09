import React, { useRef,useState,useEffect, useContext } from "react";
import { UserContext } from "./MainDiv";

function Div22() {
    const data=useContext(UserContext);
    
    return ( 
        <React.Fragment>
            <p>div22 {data}</p>
        </React.Fragment>
     );
}

export default Div22;